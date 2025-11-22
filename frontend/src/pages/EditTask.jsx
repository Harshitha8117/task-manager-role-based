import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function EditTask() {
  const navigate = useNavigate();

  // Read ID from URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Form data
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  // Load task ONLY if editing
  useEffect(() => {
    if (!id) return; // <-- FIX: Prevent /null errors

    async function loadTask() {
      try {
        const { data } = await api.get(`/tasks/${id}`);
        setForm({
          title: data.title,
          description: data.description,
          status: data.status,
        });
      } catch (err) {
        console.error("Error loading task:", err);
      }
    }

    loadTask();
  }, [id]);

  // Handle submit (create or update)
  const submit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Update existing task
        await api.put(`/tasks/${id}`, form);
      } else {
        // Create new task
        await api.post(`/tasks`, form);
      }

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error saving task");
    }
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-2xl font-bold mb-6">
        {id ? "Edit Task" : "Create Task"}
      </h1>

      <form onSubmit={submit} className="space-y-4 max-w-lg">

        <input
          type="text"
          className="w-full p-3 bg-gray-800 rounded"
          placeholder="Task Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <textarea
          className="w-full p-3 bg-gray-800 rounded"
          placeholder="Description"
          rows="4"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <select
          className="w-full p-3 bg-gray-800 rounded"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700">
          {id ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
}
