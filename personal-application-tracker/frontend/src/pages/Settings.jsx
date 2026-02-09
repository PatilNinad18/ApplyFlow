import React, { useEffect, useState } from "react";
import ToggleSwitch from "../components/ui/ToggleSwitch"
import { getMyProfile, updateMyProfile } from "../api/users.api";

const Settings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [inAppNotif, setInAppNotif] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);

  // Load saved settings from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("settings");
      if (raw) {
        const saved = JSON.parse(raw);
        if (typeof saved.emailNotif === "boolean") setEmailNotif(saved.emailNotif);
        if (typeof saved.inAppNotif === "boolean") setInAppNotif(saved.inAppNotif);
      }
    } catch (err) {
      // ignore parse errors
    }
  }, []);

  // Load user profile
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getMyProfile();
        if (!mounted) return;
        const user = res.data.user;
        setName(user.name || "");
        setEmail(user.email || "");
      } catch (err) {
        // ignore
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Persist settings when changed
  useEffect(() => {
    try {
      const obj = { emailNotif, inAppNotif };
      localStorage.setItem("settings", JSON.stringify(obj));
    } catch (err) {
      // ignore
    }
  }, [emailNotif, inAppNotif]);

  
  return (
    <div className=" w-full flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Settings
        </h2>

        {/* Account + Notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Account Settings */}
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Account Settings
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    value={email}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-100 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
            </div>
              <div className="flex gap-3 mt-5">
                <button
                  onClick={async () => {
                    try {
                      setSaving(true);
                      await updateMyProfile({ name });
                      alert("Profile saved");
                    } catch (err) {
                      alert(err.response?.data?.message || "Save failed");
                    } finally {
                      setSaving(false);
                    }
                  }}
                  disabled={saving}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save"}
                </button>

                <button className="px-5 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">
                  Change Password
                </button>
              </div>
          </div>

          {/* Notifications */}
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Notifications
            </h3>

            {/* Email Reminder */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Email Reminders</p>
              <ToggleSwitch
                enabled={emailNotif}
                setEnabled={setEmailNotif}
              />
            </div>

            {/* In-App Notification */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">In-App Notifications</p>
              <ToggleSwitch
                enabled={inAppNotif}
                setEnabled={setInAppNotif}
              />

              
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Settings;
