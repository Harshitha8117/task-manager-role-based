import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");      // admin / user
  const userId = localStorage.getItem("userId");  // logged in ID
  const name = localStorage.getItem("name");

  // Load tasks from backend
  const loadTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error loading tasks:", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Edit handler
  const handleEdit = (id) => {
    navigate(`/edit?id=${id}`);
  };

  // Delete handler
  const handleDelete = async (id) => {
    if (!confirm("Do you really want to delete this task?")) return;

    try {
      await api.delete(`/tasks/${id}`);
      loadTasks();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-white">

      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar title="Dashboard" />

        <div className="p-6 space-y-6">

          {/* CREATE TASK BUTTON */}
          <div className="flex justify-end">
            <button
              className="px-5 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
              onClick={() => navigate("/edit")}
            >
              + Create Task
            </button>
          </div>

          {/* TASK LIST */}
          <div className="glass p-5 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3">Your Tasks</h2>

            {tasks.length === 0 && (
              <p className="text-gray-400">No tasks found</p>
            )}

            <table className="w-full mt-3 text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                  <th className="p-2">Title</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Created By</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task) => (
                  <tr key={task._id} className="border-b border-white/5">
                    <td className="p-2">{task.title}</td>

                    <td className="p-2 capitalize">{task.status}</td>

                    <td className="p-2">
                      {task.createdBy?.name || "Unknown"}
                    </td>

                    <td className="p-2 space-x-2">

                      {/* EDIT */}
                      <button
                        className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                        onClick={() => handleEdit(task._id)}
                      >
                        Edit
                      </button>

                      {/* DELETE — admin OR task creator */}
                      {(role === "admin" || task.createdBy?._id === userId) && (
                        <button
                          className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                          onClick={() => handleDelete(task._id)}
                        >
                          Delete
                        </button>
                      )}

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}
