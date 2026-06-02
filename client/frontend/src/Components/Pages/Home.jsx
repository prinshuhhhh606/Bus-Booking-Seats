import React, { useState, useEffect } from "react";

import "./Home.css";

import Loader from "../Common/Loader";
import SearchBar from "../Common/SearchBar";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home">
      {/* HERO SECTION */}

      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Travel Comfortably Across India</h1>

          <p>
            Book bus tickets online with the best prices, premium comfort, and
            trusted routes.
          </p>

          {/* SEARCH BAR */}

          <SearchBar />

          {/* ADMIN DASHBOARD BUTTON */}

          <button
            className="dashboard-btn"
            onClick={() => navigate("/admin/dashboard")}
          >
            Go To Dashboard
          </button>
        </div>
      </section>

      {/* POPULAR ROUTES */}

      <section className="popular-routes">
        <div className="section-title">
          <h2>Popular Routes</h2>

          <p>Top searched routes by travelers</p>
        </div>

        <div className="routes-grid">
          <div className="route-card">
            <h3>Delhi → Jaipur</h3>
            <p>Starting from ₹499</p>
          </div>

          <div className="route-card">
            <h3>Indore → Bhopal</h3>
            <p>Starting from ₹299</p>
          </div>

          <div className="route-card">
            <h3>Mumbai → Pune</h3>
            <p>Starting from ₹399</p>
          </div>

          <div className="route-card">
            <h3>Hyderabad → Bangalore</h3>
            <p>Starting from ₹699</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
