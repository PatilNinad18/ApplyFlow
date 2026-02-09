import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-56 h-full rounded-xl m-5 p-3 flex flex-col">
      
      {/* Menu Section */}
      <div className="space-y-1">
        
        <div className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-white hover:shadow-sm transition">
          <img width="22" height="22" src="https://img.icons8.com/fluency/32/dashboard-layout.png" alt="dashboard" />
          <Link to="/dashboard" className="text-base font-medium hover:text-black">
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-white hover:shadow-sm transition">
          <img width="22" height="22" src="https://img.icons8.com/color/48/goodnotes.png" alt="applications" />
          <Link to="/applications" className="text-base font-medium hover:text-black">
            Applications
          </Link>
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-white hover:shadow-sm transition">
          <img width="22" height="22" src="https://img.icons8.com/nolan/64/add.png" alt="add" />
          <Link to="/applications/new" className="text-base font-medium hover:text-black">
            Add Application
          </Link>
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-white hover:shadow-sm transition">
          <img width="22" height="22" src="https://img.icons8.com/nolan/64/apple-settings.png" alt="settings" />
          <Link to="/settings" className="text-base font-medium hover:text-black">
            Settings
          </Link>
        </div>

      </div>

      {/* Logout Button (Bottom)
      <div className="mt-auto px-1 py-3">
        <button
          className="
            w-full text-left
            bg-red-400 text-white font-medium
            px-3 py-2 rounded-lg
            shadow-md
            transition-all duration-200 ease-in-out
            hover:bg-red-500
            hover:shadow-lg
            hover:-translate-y-0.5
            active:translate-y-0
          "
        >
          Log Out
        </button> */}
      {/* </div> */}

    </aside>
  );
};

export default Sidebar;
