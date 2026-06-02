import "./Reports.css";

import { useNavigate } from "react-router-dom";

export default function Reports() {
  const navigate = useNavigate();

  return (
    <div className="reports-container">
      {/* TOP BAR */}

      <div className="top-bar">
        <h1>Reports</h1>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      {/* REPORT CARD 1 */}

      <div className="report-card">
        <h2>Monthly Revenue</h2>

        <p>₹5,40,000</p>
      </div>

      {/* REPORT CARD 2 */}

      <div className="report-card">
        <h2>Total Tickets Sold</h2>

        <p>2,430</p>
      </div>
    </div>
  );
}
