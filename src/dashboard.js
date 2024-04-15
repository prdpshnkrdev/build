import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Dashboard() {
  return (
    <Grid container flexDirection={"column"}>
      <Grid item>
        <h2>Welcome to the Dashboard</h2>
        <p>Click on the links above to navigate to different pages.</p>
      </Grid>

      <Link to="/google" style={{ textDecoration: "none" }}>
        <Button variant="contained">Google</Button>
      </Link>

      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
