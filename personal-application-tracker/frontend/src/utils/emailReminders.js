import emailjs from "@emailjs/browser";
import { getApplications } from "../api/applications.api";
import { getMyProfile } from "../api/users.api";

let intervalId = null;
const STORAGE_KEY = "sentReminders";

function loadSent() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveSent(arr) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  } catch {}
}

function isTomorrow(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  if (isNaN(d)) return false;
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  // compare YYYY-MM-DD
  const a = d.toISOString().slice(0, 10);
  const b = tomorrow.toISOString().slice(0, 10);
  return a === b;
}

export async function sendReminderEmail(app, user) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) return;

  const templateParams = {
    to_name: user.name || user.email,
    to_email: user.email,
    company: app.companyName,
    role: app.role,
    interview_date: app.interviewDate ? new Date(app.interviewDate).toLocaleString() : "",
    notes: app.notes || "",
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    const sent = loadSent();
    sent.push({ id: app._id, date: app.interviewDate });
    saveSent(sent);
  } catch (err) {
    // ignore errors for now
    console.error("EmailJS send failed", err);
  }
}

export async function checkAndSend() {
  try {
    const [appsRes, userRes] = await Promise.all([getApplications(), getMyProfile()]);
    const apps = appsRes.data.applications || [];
    const user = userRes.data.user;
    const sent = loadSent();

    for (const app of apps) {
      if (!app.interviewDate) continue;
      if (!isTomorrow(app.interviewDate)) continue;
      const already = sent.find((s) => s.id === app._id && s.date === app.interviewDate);
      if (already) continue;
      await sendReminderEmail(app, user);
    }
  } catch (err) {
    console.error("Reminder check failed", err);
  }
}

export function startEmailReminders({ intervalMinutes = 60 } = {}) {
  stopEmailReminders();
  // run immediately
  checkAndSend();
  intervalId = setInterval(checkAndSend, intervalMinutes * 60 * 1000);
}

export function stopEmailReminders() {
  if (intervalId) clearInterval(intervalId);
  intervalId = null;
}

export default { startEmailReminders, stopEmailReminders };
