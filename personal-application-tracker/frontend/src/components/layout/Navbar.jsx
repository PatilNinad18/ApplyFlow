import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../app/providers/SearchProvider'
import { clearToken } from '../../utils/auth'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleLogout = () => {
    clearToken();
    navigate('/login');
  };

  useEffect(() => {
    if (location.pathname !== "/applications" && searchTerm) {
      setSearchTerm("");
    }
  }, [location.pathname]);

  return (
    <div>
      <nav className="flex justify-between items-center">
        <div className="flex m-6 gap-2">
          <img
            src="/assets/icon.svg"
            alt="ApplyFlow logo"
            className="h-12 w-12"
          />
          <h1 className="font-bold text-2xl mt-2">ApplyFlow</h1>
        </div>

        <div className="flex items-center gap-6 mr-6">
          {/** Links: only keep settings per user request */}
          <Link to="/settings" className="text-gray-700 hover:text-gray-900">Settings</Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Search input visible only on /applications */}
        {location.pathname === "/applications" && (
          <div className="pr-6">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search applications..."
                className="w-72 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-1 top-1/2 -translate-y-1/2 px-2 text-sm text-gray-500 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar