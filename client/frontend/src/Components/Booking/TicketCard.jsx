import React from "react";
import "../Booking/TicketCard.css";
import { useNavigate } from "react-router-dom";

const TicketCard = ({
  passengerName = "Rahul Sharma",
  route = "Mumbai → Goa",
  seat = "B4",
  date = "15 June 2026",
  price = 1800,
}) => {
  const navigate = useNavigate();

  // VIEW FULL TICKET

  const handleViewTicket = () => {
    navigate("/ticket", {
      state: {
        passengerName,
        route,
        seat,
        date,
        price,
      },
    });
  };

  return (
    <div className="ticket-wrapper">
      <div className="ticket-card">
        {/* TOP */}

        <div className="ticket-top">
          <h3>{route}</h3>

          <span className="status">Confirmed</span>
        </div>

        {/* INFO */}

        <div className="ticket-info">
          <p>
            <strong>Passenger:</strong> {passengerName}
          </p>

          <p>
            <strong>Seat:</strong> {seat}
          </p>

          <p>
            <strong>Date:</strong> {date}
          </p>

          <p>
            <strong>Price:</strong> ₹{price}
          </p>
        </div>

        {/* BUTTON */}

        <button className="ticket-btn" onClick={handleViewTicket}>
          View Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
