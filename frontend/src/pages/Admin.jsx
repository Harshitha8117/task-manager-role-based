import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import api from '../api';

export default function Admin() {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const loadStats = async () => {
    try {
      const { data } = await api.get('/admin/stats');
      setStats(data);
    } catch (e) {
      console.error(e);
    }
  };

  const loadUsers = async () => {
    try {
      const { data } = await api.get('/admin/users');
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  };

  const loadTasks = async () => {
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadStats();
    loadUsers();
    loadTasks();
  }, []);

  const changeRole = async (id, role) => {
    if (!confirm('Change role?')) return;
    await api.put(`/admin/users/${id}/role`, { role });
    loadUsers();
    loadStats();
  };

  const deleteUser = async (id) => {
    if (!confirm('Delete user?')) return;
    await api.delete(`/admin/users/${id}`);
    loadUsers();
    loadStats();
  };

  const deleteTask = async (id) => {
    if (!confirm('Delete task?')) return;
    await api.delete(`/tasks/${id}`);
    loadTasks();
    loadStats();
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:block"><Sidebar user={{ name: localStorage.getItem('name') }} /></div>
      <div className="flex-1">
        <Topbar user={{ name: localStorage.getItem('name') }} />
        <main className="p-6 space-y-6">
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass p-4 rounded">
              <div className="text-sm text-gray-400">Total Tasks</div>
              <div className="text-2xl font-bold">{stats.totalTasks ?? '-'}</div>
            </div>
            <div className="glass p-4 rounded">
              <div className="text-sm text-gray-400">Completed</div>
              <div className="text-2xl font-bold">{stats.completed ?? '-'}</div>
            </div>
            <div className="glass p-4 rounded">
              <div className="text-sm text-gray-400">Pending</div>
              <div className="text-2xl font-bold">{stats.pending ?? '-'}</div>
            </div>
            <div className="glass p-4 rounded">
              <div className="text-sm text-gray-400">Users</div>
              <div className="text-2xl font-bold">{stats.totalUsers ?? '-'}</div>
            </div>
          </section>

          <section className="glass p-4 rounded">
            <h3 className="font-semibold mb-3">Users</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="text-xs text-gray-400">
                  <tr><th className="p-2">Name</th><th className="p-2">Email</th><th className="p-2">Role</th><th className="p-2">Actions</th></tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u._id} className="border-t">
                      <td className="p-2">{u.name}</td>
                      <td className="p-2">{u.email}</td>
                      <td className="p-2">{u.role}</td>
                      <td className="p-2">
                        <button onClick={()=>changeRole(u._id, u.role === 'admin' ? 'user' : 'admin')} className="px-2 py-1 bg-indigo-600 rounded mr-2">{u.role === 'admin' ? 'Demote' : 'Promote'}</button>
                        <button onClick={()=>deleteUser(u._id)} className="px-2 py-1 bg-red-600 rounded">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="glass p-4 rounded">
            <h3 className="font-semibold mb-3">Tasks</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="text-xs text-gray-400">
                  <tr><th className="p-2">Title</th><th className="p-2">Status</th><th className="p-2">By</th><th className="p-2">Actions</th></tr>
                </thead>
                <tbody>
                  {tasks.map(t => (
                    <tr key={t._id} className="border-t">
                      <td className="p-2">{t.title}</td>
                      <td className="p-2">{t.status}</td>
                      <td className="p-2">{t.createdBy?.name || 'Unknown'}</td>
                      <td className="p-2">
                        <button onClick={()=>location.href='/edit?id='+t._id} className="px-2 py-1 bg-blue-600 rounded mr-2">Edit</button>
                        <button onClick={()=>deleteTask(t._id)} className="px-2 py-1 bg-red-600 rounded">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
