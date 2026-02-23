import React from "react";
import { Link } from "react-router-dom";

const Cart = () => (
  <>
    <header>
      <div className="container">
        <Link to="/" className="logo-link">
          <img src="images/logo.png" alt="DeviceSwap Logo" className="header-logo" />
          <h1 style={{ color: '#6c63ff', fontWeight: 700, fontSize: '2rem', margin: 0 }}>DeviceSwap</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/settings">Setting</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Register</Link>
        </nav>
      </div>
    </header>
    <div className="container page-grid">
      <div className="card">
        <h2>Your Cart</h2>
        <div className="cart-item">
          <div>
            <strong>iPhone 12 Pro</strong><br />
            £250
          </div>
          <button className="btn small remove-btn">Remove</button>
        </div>
        <div className="cart-item">
          <div>
            <strong>Sony WH-1000XM4</strong><br />
            £180
          </div>
          <button className="btn small remove-btn">Remove</button>
        </div>
        <hr />
        <div className="cart-total">
          <strong>Total:</strong> £430
        </div>
      </div>
    </div>
  </>
);

export default Cart;
