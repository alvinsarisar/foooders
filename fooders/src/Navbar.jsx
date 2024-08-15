import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Fooders.com</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="navbar-item">Menu</Link>
        <Link to="/cart" className="navbar-item">Cart</Link>
        <Link to="/checkout" className="navbar-item">Checkout</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/review" className="navbar-item">Review</Link>
      </div>
    </nav>
  );
}

export default Navbar;
