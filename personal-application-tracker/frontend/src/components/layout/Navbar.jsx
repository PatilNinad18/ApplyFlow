import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center">
        <div className="flex m-12 gap-2">
          <img
          src="/assets/icon.svg"
          alt="ApplyFlow logo"
          className="h-12 w-12"
          />
          <h1 className="font-bold text-2xl mt-2">ApplyFlow</h1>
        </div>

        <div className="flex items-center gap-10 mr-25">
          <h3>Features</h3>
          <div className="bg-gray-300 h-10 w-50 rounded-3xl flex justify-between items-center pl-5 pr-5 text-gray-600 hover:text-gray-800 transition">
            <p>Search</p>
            <i className="ri-search-line"></i>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar