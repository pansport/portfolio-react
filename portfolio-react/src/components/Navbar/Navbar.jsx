import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="menu-icon">
        Port<span>folio</span>.
      </a>
      <ul className="navbar-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">My skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
