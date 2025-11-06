import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import "./components/Navbar.css"; // ✅ import here

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Tasty <span>Token</span></h1>
        <div className="nav-links">
          <Link to="/">Menu</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/delivery">Delivery</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </Router>
  );
}
