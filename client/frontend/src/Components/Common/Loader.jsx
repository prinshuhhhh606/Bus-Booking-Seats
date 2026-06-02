import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        {/* Spinner */}

        <div className="loader-spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Text */}

        <h2>Loading...</h2>

        <p>Please wait while we prepare your journey.</p>
      </div>
    </div>
  );
};

export default Loader;
