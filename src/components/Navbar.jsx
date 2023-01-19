import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../style/Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/characters" className="nav-links">
          Characters
        </Link>
        <Link to="/add-character" className="nav-links">
          Create Character
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
