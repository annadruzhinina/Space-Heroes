import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heroes from "../Heroes";

import "../style/Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-links">
          Home
        </Link>
        {/* <Link to="/heroes" className="nav-links">
          Heroes
        </Link> */}
        <Link to="/characters" className="nav-links">
          Characters
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
