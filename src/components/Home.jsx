import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
        🔐 Password Reset App
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/register"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Login
        </Link>
        <Link
          to="/forgot-password"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Forgot Password
        </Link>
      </div>
    </div>
  );
}
