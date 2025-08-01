import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      setMessage(data.message || "Password reset successful.");
    } catch (err) {
      console.error("Error resetting password:", err);
      setMessage("Error resetting password.");
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "100px auto",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: { marginBottom: "20px", color: "#333" },
    form: { display: "flex", flexDirection: "column", gap: "15px" },
    input: {
      padding: "12px 15px",
      fontSize: "1rem",
      border: "1.5px solid #ccc",
      borderRadius: "6px",
      outline: "none",
    },
    button: {
      padding: "12px",
      backgroundColor: "#28a745",
      color: "white",
      fontSize: "1rem",
      fontWeight: "600",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    message: {
      marginTop: "15px",
      color: "#555",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reset Password</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="password"
          placeholder="New password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = "#28a745")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm new password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = "#28a745")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
        >
          Reset Password
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}
z