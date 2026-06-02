import "./DashboardStats.css";

function DashboardStats() {
  const stats = [
    {
      title: "Total Buses",
      value: 48,
    },
    {
      title: "Total Bookings",
      value: 1240,
    },
    {
      title: "Active Routes",
      value: 22,
    },
    {
      title: "Revenue",
      value: "₹4.8L",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.title}</h3>
            <h1>{item.value}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStats;
