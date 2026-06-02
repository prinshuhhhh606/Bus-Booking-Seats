import React from "react";
import "./ProtectedRoute.css";

import { Navigate, Link } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  // USER NOT LOGGED IN

  if (!isLoggedIn) {
    return (
      <div className="protected-wrapper">
        <div className="protected-card">
          {/* ICON */}

          <div className="protected-icon">🔒</div>

          {/* TITLE */}

          <h1>Access Denied</h1>

          {/* TEXT */}

          <p>You need to login first to access this page.</p>

          {/* BUTTON */}

          <Link to="/login" className="protected-btn">
            Go To Login
          </Link>
        </div>
      </div>
    );
  }

  // USER LOGGED IN

  return children;
};

export default ProtectedRoute;
