import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const role = localStorage.getItem("role"); // admin/user
  const name = localStorage.getItem("name");

  return (
    <div className="w-64 h-screen bg-[#0f172a] text-white p-5 flex flex-col border-r border-white/10">

      <div className="mt-2 text-sm text-gray-300">
  Role: <span className="font-bold text-white">{localStorage.getItem("role")}</span>
</div>


      {/* USER INFO */}
      <div className="mb-10">
        <h2 className="text-xl font-bold">{name || "User"}</h2>

        <div className="mt-2">
          <span
            className={`px-2 py-1 rounded text-xs font-bold ${
              role === "admin" ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {role || "user"}
          </span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-3 text-sm">

        <Link to="/dashboard" className="p-2 block hover:bg-white/10">
  Dashboard
</Link>


        {/* ADMIN ONLY LINK */}
        {role === "admin" && (
          <a
            href="/admin"
            className="p-2 rounded hover:bg-white/10 transition"
          >
            Admin Panel
          </a>
        )}

      </nav>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="mt-auto p-2 bg-red-600 hover:bg-red-700 rounded transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
