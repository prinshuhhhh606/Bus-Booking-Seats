import React, { useState } from "react";
import "./Login.css";
import { isValidEmail, isValidPassword } from "../../utils/validators";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!isValidPassword(password)) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Login Successful");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
