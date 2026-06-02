// src/Components/auth/ForgetPassword.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // NAVIGATE TO RESET PASSWORD PAGE
        navigate("/reset-password");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password 🔑</h2>

        <p className="forgot-text">
          Enter your email to receive password reset link
        </p>

        <form onSubmit={handleForgetPassword}>
          <input
            className="forgot-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="forgot-btn" type="submit">
            Send Reset Link
          </button>
        </form>

        <button className="back-login-btn" onClick={() => navigate("/login")}>
          Back To Login
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
