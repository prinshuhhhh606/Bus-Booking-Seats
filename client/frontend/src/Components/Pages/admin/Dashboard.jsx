import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../Admin/AdminSidebar";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div className="dashboard-container" style={{ flex: 1 }}>
        <h1>Admin Dashboard</h1>

        <div className="cards">
          <div className="card" onClick={() => navigate("/admin/manage-buses")}>
            <h2>Total Buses</h2>
            <p>120</p>
          </div>

          <div
            className="card"
            onClick={() => navigate("/admin/manage-bookings")}
          >
            <h2>Total Bookings</h2>
            <p>450</p>
          </div>

          <div className="card" onClick={() => navigate("/admin/users")}>
            <h2>Total Users</h2>
            <p>900</p>
          </div>

          <div className="card" onClick={() => navigate("/admin/reports")}>
            <h2>Revenue</h2>
            <p>₹2,50,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
