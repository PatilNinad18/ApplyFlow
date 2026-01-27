import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 text-white">
      {/* Top Navbar */}
      <header className="h-14 flex items-center justify-between px-6 border-b border-white/10">
        <h1 className="text-lg font-semibold">ApplyFlow</h1>

        <nav className="flex gap-4 text-sm text-white/80">
          <Link to="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
          <Link to="/applications" className="hover:text-white">
            Applications
          </Link>
          <Link to="/profile" className="hover:text-white">
            Profile
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
