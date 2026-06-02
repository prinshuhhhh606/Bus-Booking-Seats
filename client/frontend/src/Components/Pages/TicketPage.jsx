import React from "react";
import "./TicketPage.css";
import { useNavigate } from "react-router-dom";

const TicketPage = () => {
  const navigate = useNavigate();

  return (
    <div className="ticket-page">
      <div className="ticket-card">
        <h1>Bus Ticket</h1>

        <div className="ticket-info">
          <p>
            <strong>Passenger:</strong> Aman Sharma
          </p>

          <p>
            <strong>Bus:</strong> Raj Travels
          </p>

          <p>
            <strong>Route:</strong> Indore → Bhopal
          </p>

          <p>
            <strong>Seat:</strong> A1, A2
          </p>

          <p>
            <strong>Date:</strong> 25 May 2026
          </p>
        </div>

        <button>Download Ticket</button>

        <button onClick={() => navigate("/my-bookings")}>
          View My Bookings
        </button>
      </div>
    </div>
  );
};

export default TicketPage;
