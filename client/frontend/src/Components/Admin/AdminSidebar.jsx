import { Link } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Bus Admin</h2>

      <ul className="menu">
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/admin/add-bus">Add Bus</Link>
        </li>

        <li>
          <Link to="/admin/buses">Manage Buses</Link>
        </li>

        <li>
          <Link to="/admin/bookings">Bookings</Link>
        </li>

        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
