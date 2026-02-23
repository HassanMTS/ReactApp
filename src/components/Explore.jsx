import React from "react";
import { Link } from "react-router-dom";

const Explore = () => (
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
    <div className="search-container">
      <input type="text" placeholder="Search for devices..." />
    </div>
    <div className="filter-bar">
      <button className="filter-btn active">All Devices</button>
      <button className="filter-btn">Smartphones</button>
      <button className="filter-btn">Laptops</button>
      <button className="filter-btn">Headphones</button>
      <button className="filter-btn">Tablets</button>
    </div>
    <div className="container">
      <div className="product-grid">
        <div className="product-card" data-category="smartphone">
          <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80" alt="Smartphone" />
          <h3>Smartphone</h3>
          <p>Fast, modern smartphone ideal for daily use with advanced camera and long battery life.</p>
          <div className="price">£699</div>
          <a href="#" className="btn">Add to cart</a>
        </div>
        <div className="product-card" data-category="laptop">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80" alt="Laptop" />
          <h3>Laptop</h3>
          <p>A powerful and reliable laptop for work and school with fast processor and ample storage.</p>
          <div className="price">£1099</div>
          <a href="#" className="btn">Add to cart</a>
        </div>
        <div className="product-card" data-category="headphones">
          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=80" alt="Headphones" />
          <h3>Premium Headphones</h3>
          <p>Clear audio with high-quality sound performance and noise cancellation technology.</p>
          <div className="price">£159</div>
          <a href="#" className="btn">Add to cart</a>
        </div>
        <div className="product-card" data-category="tablet">
          <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=700&q=80" alt="Tablet" />
          <h3>Tablet</h3>
          <p>Lightweight tablet perfect for entertainment and productivity with long battery life.</p>
          <div className="price">£249</div>
          <a href="#" className="btn">Add to cart</a>
        </div>
        <div className="product-card" data-category="smartwatch">
          <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80" alt="Smartwatch" />
          <h3>Smartwatch</h3>
          <p>Track your fitness and stay connected with this feature-packed smartwatch.</p>
          <div className="price">£199</div>
          <a href="#" className="btn">Add to cart</a>
        </div>
        <div className="product-card" data-category="console">
          <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=700&q=80" alt="Gaming Console" />
          <h3>Gaming Console</h3>
          <p>Next-gen gaming console with stunning graphics and immersive gameplay experience.</p>
          <div className="price">£499</div>
          <a href="#" className="btn">Add to cart</a>
        </div>
      </div>
    </div>
    <footer>
      <p>© 2025 Device Swap. All rights reserved.</p>
    </footer>
  </>
);

export default Explore;
