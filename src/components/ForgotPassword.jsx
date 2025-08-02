import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting to:", `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(data.message || "Check your email for reset link.");
    } catch (err) {
      console.error(err.message);
      setMessage("Failed to send reset email.");
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "100px auto",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
    },
    message: {
      marginTop: "15px",
      color: "#444",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          style={styles.input}
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" style={styles.button}>Send Reset Email</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}
