import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EditTask from './pages/EditTask';
import Admin from './pages/Admin'; // adjust to ./pages/AdminPanel if your file is named AdminPanel.jsx

// Small inline protected wrappers (keeps routing simple)
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Login />;
};

const ProtectedAdminRoute = ({ children }) => {
  const role = localStorage.getItem('role');
  return role === 'admin' ? children : <Login />;
};

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />

      <Route
        path="/edit"
        element={<ProtectedRoute><EditTask /></ProtectedRoute>}
      />

      <Route
        path="/admin"
        element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>}
      />
    </Routes>
  );
}
