import "./Users.css";

import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();

  return (
    <div className="users-container">
      {/* TOP BAR */}

      <div className="top-bar">
        <h1>Users List</h1>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      {/* USER 1 */}

      <div className="user-box">
        <h3>Priyanshu</h3>

        <p>Email: pri@gmail.com</p>

        <button className="remove-btn">Remove User</button>
      </div>

      {/* USER 2 */}

      <div className="user-box">
        <h3>Rahul</h3>

        <p>Email: rahul@gmail.com</p>

        <button className="remove-btn">Remove User</button>
      </div>
    </div>
  );
}
