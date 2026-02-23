import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="site-header">
    <div className="container">
      <Link to="/" className="logo-link">
        <img 
          src="/images/logo.png" 
          alt="DeviceSwap Logo" 
          className="header-logo"
        />
        <h1>DeviceSwap</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Register</Link>
      </nav>
    </div>
  </header>
);

export default Header;
