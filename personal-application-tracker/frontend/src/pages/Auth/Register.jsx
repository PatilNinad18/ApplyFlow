import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth.api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const res = await registerUser(formData);
    alert("Registered successfully");
    navigate("/login");
  } catch (err) {
    const message =
      err.response?.data?.message || "Something went wrong";
    alert(message);

    if (err.response?.status === 409) {
      navigate("/login");
    }
  }
};


  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center w-[400px] text-center border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          ApplyFlow
        </h1>
        <p className="text-gray-500 mb-8">
          Create your account to start tracking
        </p>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleRegister}
        >
          <input
            name="name"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Full Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="mt-4 w-full py-3 text-white font-bold rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
            id="auth-button"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
