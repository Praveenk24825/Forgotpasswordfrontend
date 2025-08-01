import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/forgot-password`, ... {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message || "Check your email for reset link.");
    } catch (err) {
      setMessage("Error sending reset email.");
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
    heading: {
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px 15px",
      fontSize: "1rem",
      border: "1.5px solid #ccc",
      borderRadius: "6px",
      outline: "none",
    },
    button: {
      padding: "12px",
      backgroundColor: "#0077ff",
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
      <h2 style={styles.heading}>Forgot Password</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = "#0077ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005bb5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0077ff")}
        >
          Send Reset Email
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}
