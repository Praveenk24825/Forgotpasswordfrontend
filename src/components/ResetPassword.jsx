import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/reset-password/${token}`, { password });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          className="border p-2 mb-4 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded w-full"
        >
          Reset Password
        </button>
        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
