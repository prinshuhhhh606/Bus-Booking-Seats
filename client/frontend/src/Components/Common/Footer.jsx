import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}

        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-circle">B</div>

            <div>
              <h2>BookMyBus</h2>
              <p>Travel Smart Across India</p>
            </div>
          </div>

          <p className="footer-description">
            Book bus tickets online with comfort, safety, and affordable prices.
            Experience smooth travel across cities with trusted bus operators.
          </p>
        </div>

        {/* LINKS */}

        <div className="footer-links">
          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/search-buses">Search Buses</a>
            <a href="/bookings">My Bookings</a>
            <a href="/profile">Profile</a>
          </div>

          <div className="footer-column">
            <h3>Support</h3>

            <a href="/">Help Center</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Contact Us</a>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <p>📍 Indore, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉ support@bookmybus.com</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 BookMyBus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
