import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center bg-light" style={{ minHeight: "100vh" }}>
      <div className="card p-5 shadow-sm text-center" style={{ borderRadius: "1rem", maxWidth: "500px", width: "100%" }}>
        <h2 className="mb-4">🔐 Welcome to Password Reset App</h2>
        <p className="mb-4 text-muted">Choose an action below:</p>

        <div className="d-flex flex-column gap-3">
          <Link to="/forgot-password" className="btn btn-primary">
            Forgot Password
          </Link>
          <Link to="/register" className="btn btn-success">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
