import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', form);
      alert('Registered. Please login.');
      nav('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 glass rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create account</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <input className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          <input className="w-full p-3 rounded bg-transparent border border-white/10" placeholder="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
          <button className="w-full py-3 bg-indigo-600 rounded mt-2">Register</button>
        </form>
        <p className="mt-3 text-sm">Have account? <a className="text-indigo-400" href="/login">Login</a></p>
      </div>
    </div>
  );
}
