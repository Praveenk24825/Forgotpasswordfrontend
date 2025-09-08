import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
        Welcome to Password Reset App
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/register" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Register
        </Link>
        <Link to="/login" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Login
        </Link>
        <Link to="/forgot-password" className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
          Forgot Password
        </Link>
      </div>
    </div>
  );
}
