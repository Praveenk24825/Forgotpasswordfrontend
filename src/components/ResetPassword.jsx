import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/reset-password/${token}`, { password });
      setMsg(res.data.message);
      setPassword("");
    } catch (err) {
      setMsg(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-center">Reset Password</h3>
        {msg && <div className="mb-3 p-2 bg-green-100 text-green-700 rounded text-center">{msg}</div>}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
