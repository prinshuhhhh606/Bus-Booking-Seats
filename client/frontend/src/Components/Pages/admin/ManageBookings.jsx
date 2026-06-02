import "./ManageBookings.css";

import { useNavigate } from "react-router-dom";

export default function ManageBookings() {
  const navigate = useNavigate();

  return (
    <div className="booking-container">
      {/* TOP BAR */}

      <div className="top-bar">
        <h1>Manage Bookings</h1>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      {/* BOOKING CARD 1 */}

      <div className="booking-card">
        <h3>Booking ID: #1023</h3>

        <p>User: Priyanshu</p>

        <p>Route: Delhi - Agra</p>

        <button className="cancel-btn">Cancel Booking</button>
      </div>

      {/* BOOKING CARD 2 */}

      <div className="booking-card">
        <h3>Booking ID: #1050</h3>

        <p>User: Rahul</p>

        <p>Route: Indore - Bhopal</p>

        <button className="cancel-btn">Cancel Booking</button>
      </div>
    </div>
  );
}
