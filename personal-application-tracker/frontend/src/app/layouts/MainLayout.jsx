import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";

export default function MainLayout() {
  return (
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

      </div>
    </div>
  );
}


      