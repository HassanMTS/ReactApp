import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    {/* HEADER: Contains logo and main navigation*/}
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

    {/* BANNER SECTION: Main landing section with background image and call to action */}
    <section id="banner" className="fade-in">
      {/* Background image for banner*/}
      <img src="images/IMG1.jpg" alt="banner Image" className="banner-bg" />

      <div className="banner-content">
        <h2>Buy • Sell • Repair — All in One Place</h2>
        <p>Your one-stop marketplace for used and broken electronics. Get your device repaired in a flash!</p>
        <div className="banner-buttons">
          <a href="aboutus.html" className="explore">About Us</a>
        </div>
      </div>
    </section>

    {/* FEATURES SECTION: Highlights main services*/}
    <section className="features fade-in" style={{display:'flex', justifyContent:'space-between', gap:'1.5rem', flexWrap:'wrap', maxWidth:'1200px', margin:'0 auto'}}>
      {/* Feature 1: Buy Devices */}
      <a href="explore.html" style={{textDecoration:'none', color:'inherit', flex:1}}>
        <div className="feature-card">
          <img src="images/buy.webp" alt="Buy" />
          <h3>Buy Quality Devices</h3>
          <p>Browse affordable, certified pre-owned smartphones, laptops, and other devices.</p>
        </div>
      </a>

      {/* Feature 2: Sell devices */}
      <a href="sell.html" style={{textDecoration:'none', color:'inherit', flex:1}}>
        <div className="feature-card">
          <img src="images/sell.jpg" alt="Sell" />
          <h3>Sell Your Gadgets</h3>
          <p>List your old devices with quick approval and instant payments.</p>
        </div>
      </a>

      {/* Feature 3: Repair device */}
      <a href="repair.html" style={{textDecoration:'none', color:'inherit', flex:1}}>
        <div className="feature-card">
          <img src="images/repair.jpg" alt="Repair" />
          <h3>Repair & Repurposes</h3>
          <p>Get screen replacements, battery fixes, diagnostics, and more.</p>
        </div>
      </a>
    </section>

    {/* WHY CHOOSE US SECTION: Explains benefits of the platform*/}
    <section className="why-choose-us">
      <h2>Why Choose DeviceSwap?</h2>
      <div className="benefits-grid">
        <div className="benefit-item">
          <h3>✓ Trusted Platform</h3>
          <p>All devices are verified and certified before listing. Shop with confidence knowing every product meets our quality standards.</p>
        </div>
        <div className="benefit-item">
          <h3>✓ Best Prices</h3>
          <p>Get competitive prices whether you're buying or selling. Our marketplace ensures fair value for everyone.</p>
        </div>
        <div className="benefit-item">
          <h3>✓ Fast & Secure</h3>
          <p>Quick approval process, instant payments, and secure transactions. Your safety is our priority.</p>
        </div>
        <div className="benefit-item">
          <h3>✓ Expert Support</h3>
          <p>Our team of technicians and customer service experts are here to help you every step of the way.</p>
        </div>
      </div>
    </section>

    {/* CALL TO ACTION SECTION: Encourages users to sign up or explore */}
    <section className="action-section">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of users buying, selling, and repairing devices on DeviceSwap.</p>
      {/*Action button*/}
      <div className="action-buttons">
        <a href="registration.html" className="action-button primary">Create Account</a>
        <a href="explore.html" className="action-button secondary">Browse Devices</a>
      </div>
    </section>

    {/* FOOTER: Bottom of the page */}
    <footer>
      © 2025 DeviceSwap — All Rights Reserved
    </footer>
  </>
);

export default Home;
