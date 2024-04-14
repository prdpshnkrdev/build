import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <h2>Welcome to the Dashboard</h2>
        <p>Click on the links above to navigate to different pages.</p>
      </div>

      <div>
        <button>
          <Link to="/" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </button>
        <button>
          <Link to="/google" style={{ textDecoration: "none" }}>
            Google
          </Link>
        </button>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
