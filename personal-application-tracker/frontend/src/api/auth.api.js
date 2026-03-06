import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (data) => {
  try {
    const res = await API.post("/register", data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

export const loginUser = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed"
    );
  }
};