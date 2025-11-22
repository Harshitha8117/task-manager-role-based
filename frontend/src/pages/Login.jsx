import React, { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/login", {
        email: form.email,
        password: form.password,
      });

      // Save data
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("name", data.user.name);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-white">
      <div className="glass w-[350px] p-6 rounded-lg shadow-xl border border-white/10">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome back</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded bg-transparent border border-white/20"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 rounded bg-transparent border border-white/20"
            required
          />

          <button className="w-full py-3 bg-indigo-600 rounded hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        <p className="mt-3 text-center text-sm">
          No account?{" "}
          <Link to="/register" className="text-indigo-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
