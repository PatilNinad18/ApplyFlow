import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Landing from "../../pages/Landing";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import Dashboard from "../../pages/Dashboard";
import Applications from "../../pages/Applications/Application";
import AddApplications from "../../pages/AddApplications";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes (NO layout) */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected / App routes (WITH layout) */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/new" element={<AddApplications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="settings" element={<Settings/>} />
      </Route>
    </Routes>
  );
}
