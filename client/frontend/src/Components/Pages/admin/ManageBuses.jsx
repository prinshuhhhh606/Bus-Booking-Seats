import "./ManageBuses.css";

import { useNavigate } from "react-router-dom";

export default function ManageBuses() {
  const navigate = useNavigate();

  const buses = [
    { id: 1, name: "Volvo AC", route: "Delhi - Jaipur" },
    { id: 2, name: "Sleeper Bus", route: "Indore - Bhopal" },
  ];

  return (
    <div className="bus-container">
      {/* TOP BAR */}

      <div className="top-bar">
        <h1>Manage Buses</h1>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      {/* TABLE */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Bus Name</th>
            <th>Route</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.id}</td>

              <td>{bus.name}</td>

              <td>{bus.route}</td>

              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
