import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(data.message || "✅ Check your email for a reset link.");
      setEmail("");
    } catch (err) {
      console.error(err.message);
      setError(err.message || "❌ Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "100vh" }}>
      <div className="card shadow-sm p-4 animate__animated animate__fadeIn" style={{ width: "100%", maxWidth: "420px", borderRadius: "1rem" }}>
        <h3 className="text-center mb-4">📧 Forgot Password</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            )}
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>

        {(message || error) && (
          <div className={`alert mt-3 text-center ${message ? "alert-success" : "alert-danger"}`} role="alert">
            {message || error}
          </div>
        )}
      </div>
    </div>
  );
}
