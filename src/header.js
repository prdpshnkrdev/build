import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Header() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button variant="contained">Dashboard</Button>
    </Link>
  );
}

export default Header;
