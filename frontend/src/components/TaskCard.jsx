import React from 'react';

export default function Topbar({ user }) {
  return (
    <header className="flex items-center justify-between p-4 glass">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold brand">Task Manager</h1>
        <span className="text-sm text-gray-300">Role: <strong className="ml-1">{localStorage.getItem('role') || 'user'}</strong></span>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm">{user?.name || 'User'}</div>
        <button onClick={() => { localStorage.clear(); location.href = '/login'; }} className="px-3 py-1 bg-red-600 rounded">Logout</button>
      </div>
    </header>
  );
}
