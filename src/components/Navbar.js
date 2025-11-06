// frontend/src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/tasty-token-logo.png"; // ✅ path to your image

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Tasty Token Logo" className="navbar-logo" />
        <h1 className="navbar-title">Tasty Token</h1>
      </div>

      <div className="nav-links">
        <Link to="/">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/delivery">Delivery</Link>
      </div>
    </nav>
  );
}
