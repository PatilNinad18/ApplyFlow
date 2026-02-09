import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth.api";
import { setToken } from "../../utils/auth";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await loginUser(formData);

    alert("Login successful");

    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));

    navigate("/dashboard");

  } catch (err) {
    const message =
      err.response?.data?.message || "Login failed";
    alert(message);
  }
};


return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="bg-white/95 p-10 rounded-2xl shadow-2xl flex flex-col items-center w-96 text-center backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome Back
        </h1>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleLogin}
        >
          <input
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            id="auth-button"
            className="mt-6 w-full py-3 text-white font-semibold"
          >
            Log In
          </button>
        </form>

        <div className="flex justify-between items-center w-full mt-5 text-sm">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Forgot Password?
          </a>
          <a
            href="/register"
            className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;


