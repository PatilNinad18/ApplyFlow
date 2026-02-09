import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import { SearchProvider } from "../providers/SearchProvider";
import { startEmailReminders, stopEmailReminders } from "../../utils/emailReminders";
import { useEffect } from "react";

export default function MainLayout() {
  return (
    <SearchProvider>
      <div className="h-screen flex flex-col">

        {/* Top Navbar */}
        <header className="h-20">
          <Navbar />
        </header>

        {/* Body section */}
        <div className="flex flex-1">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </main>

          <RemindersController />

        </div>
      </div>
    </SearchProvider>
  );
}

// start/stop reminders based on saved settings
function RemindersController() {
  useEffect(() => {
    try {
      const raw = localStorage.getItem("settings");
      const settings = raw ? JSON.parse(raw) : null;
      if (settings && settings.emailNotif) {
        startEmailReminders({ intervalMinutes: 60 });
      }
    } catch {}

    return () => stopEmailReminders();
  }, []);

  return null;
}


      