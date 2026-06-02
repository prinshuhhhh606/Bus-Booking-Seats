
import React from "react";
import "./Register.css";

const Register = () => {

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>Create Account</h1>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Register</button>

      </div>

    </div>
  );
};

export default Register;

