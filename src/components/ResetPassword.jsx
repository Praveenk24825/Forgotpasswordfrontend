import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to reset password");

      setMessage(data.message || "✅ Password reset successful.");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "100vh" }}>
      <div className="card shadow-sm p-4 animate__animated animate__fadeIn" style={{ width: "100%", maxWidth: "420px", borderRadius: "1rem" }}>
        <h3 className="text-center mb-4">🔑 Reset Your Password</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">🔒 New Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter new password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">🔁 Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm new password"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            )}
            {loading ? "Resetting..." : "Reset Password"}
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
