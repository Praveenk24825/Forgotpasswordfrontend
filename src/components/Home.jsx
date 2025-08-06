import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "100vh" }}>
      <div className="text-center card p-5 shadow-sm animate__animated animate__fadeIn" style={{ borderRadius: "1rem", maxWidth: "500px", width: "100%" }}>
        <h1 className="mb-3">🔐 Welcome</h1>
        <p className="lead mb-4">Manage your password securely. Forgot your password? Reset it easily below.</p>
        
        <div className="d-grid gap-3">
          <Link to="/forgot-password" className="btn btn-primary btn-lg">
            🔁 Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}
