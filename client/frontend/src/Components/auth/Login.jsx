import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { isValidEmail, isValidPassword } from "../../utils/validators";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation using utility
    if (!isValidEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!isValidPassword(password)) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        alert("Login successful");

        navigate("/home");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Server error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin}>
          <input
            className="login-input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <p className="forgot-link" onClick={() => navigate("/forget-password")}>
          Forgot Password?
        </p>

        <button className="signup-btn" onClick={() => navigate("/signup")}>
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
