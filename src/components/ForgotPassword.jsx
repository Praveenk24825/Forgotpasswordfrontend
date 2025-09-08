import React, { useState } from "react";
import api from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/forgot-password", { email });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-center">Forgot Password</h3>
        {msg && <div className="mb-3 p-2 bg-indigo-100 text-indigo-700 rounded text-center">{msg}</div>}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
