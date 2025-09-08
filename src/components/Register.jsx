import React, { useState } from "react";
import api from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-center">Register</h3>
        {msg && <div className="mb-3 p-2 bg-blue-100 text-blue-700 rounded text-center">{msg}</div>}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full p-2 border rounded"/>
          <input type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full p-2 border rounded"/>
          <input type="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} className="w-full p-2 border rounded"/>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Register</button>
        </form>
      </div>
    </div>
  );
}
