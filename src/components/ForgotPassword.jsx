import React, { useState } from "react";
import api from "../api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/forgot-password", { email });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error sending reset link");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 mb-4 w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
        >
          Send Reset Link
        </button>
        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
