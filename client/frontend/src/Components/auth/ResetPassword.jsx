// src/Components/auth/ResetPassword.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        navigate("/login");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card">

        <h2>Reset Password 🔒</h2>

        <form onSubmit={handleResetPassword}>

          <input
            className="reset-input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="reset-input"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button className="reset-btn" type="submit">
            Update Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ResetPassword;