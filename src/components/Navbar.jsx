import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span>SAR</span> Placement Technologies
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>
          Courses
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>

        <button className="enroll-btn">Enroll Now</button>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
