import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, CalendarCheck, User, LogOut } from "lucide-react";

const Navbar = ({ isLoggedIn = true, user = { name: "Rahul" }, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <div className="logo-circle">B</div>

          <div>
            <h2 className="logo-title">BookMyTrip</h2>
            <p className="logo-subtitle">Travel Smart</p>
          </div>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* NAVBAR CONTENT */}
        <div className={`navbar-content ${menuOpen ? "active" : ""}`}>
          {/* NAV LINKS */}
          <nav className="navbar-links">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              <Home size={18} />
              Home
            </Link>

            <Link
              to="/bookings"
              className={`nav-link ${
                location.pathname === "/bookings" ? "active-link" : ""
              }`}
            >
              <CalendarCheck size={18} />
              My Bookings
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="navbar-auth">
            {!isLoggedIn ? (
              <Link to="/login" className="login-btn">
                Login
              </Link>
            ) : (
              <>
                <Link to="/profile" className="profile-btn">
                  <div className="profile-avatar">
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div>
                    <h4>{user?.name}</h4>
                    <span>
                      <User size={13} />
                      Traveler
                    </span>
                  </div>
                </Link>

                <button className="logout-btn" onClick={handleLogout}>
                  <LogOut size={17} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
