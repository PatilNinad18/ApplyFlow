import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Login() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (

     <div className='flex h-screen w-full items-center justify-center'>
      
      <div className='bg-white/95 p-10 rounded-2xl shadow-2xl flex flex-col items-center w-96 text-center backdrop-blur-sm'>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h1>
        
        {/* ... form content remains the same ... */}
        <form className="w-full flex flex-col gap-4">
          <input
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='Email'
            type="email" 
            value={name}
            onChange={handleChange}
          />
          <input 
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='Password'
            type="password"
            name="password" 
          />
        </form>

        {/* The button can now use simpler solid blue colors */}
        <button className="mt-6 w-full py-3 text-white font-semibold" id='auth-button'>
          Log In
        </button>
        <div className='flex justify-between items-center w-full mt-5 text-sm'>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
            Forgot Password?
          </a>
          <a href="/register" className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors">
            Create Account
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login