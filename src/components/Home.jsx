import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">🔐 Password Reset App</h1>
      <p className="text-lg mb-8 text-gray-700">
        A simple app to register, login, and reset your password securely.
      </p>

      <div className="flex gap-4">
        <Link
          to="/register"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
