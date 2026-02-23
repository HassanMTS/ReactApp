import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => (
  <>
    <Header />

    {/* BANNER SECTION: Main landing section with background image and call to action */}
    <section id="banner" className="fade-in">
      <img src="/images/IMG1.jpg" alt="banner" className="banner-bg" />
      <div className="banner-content">
        <h2>Buy • Sell • Repair — All in One Place</h2>
        <p>Your one-stop marketplace for used and broken electronics. Get your device repaired in a flash!</p>
        <div className="banner-buttons">
          <Link to="/aboutus" className="explore">About Us</Link>
        </div>
      </div>
    </section>

    {/* FEATURES SECTION: Highlights main services*/}
    <section className="features fade-in">
      {/* Feature 1: Buy Devices */}
      <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
        <div className="feature-card">
          <img src="/images/buy.webp" alt="Buy" />
          <h3>Buy Quality Devices</h3>
          <p>Browse affordable, certified pre-owned smartphones, laptops, and other devices.</p>
        </div>
      </Link>

      {/* Feature 2: Sell devices */}
      <Link to="/sell" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
        <div className="feature-card">
          <img src="/images/sell.jpg" alt="Sell" />
          <h3>Sell Your Gadgets</h3>
          <p>List your old devices with quick approval and instant payments.</p>
        </div>
      </Link>

      {/* Feature 3: Repair device */}
      <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
        <div className="feature-card">
          <img src="/images/repair.jpg" alt="Repair" />
          <h3>Repair & Repurpose</h3>
          <p>Get screen replacements, battery fixes, diagnostics, and more.</p>
        </div>
      </Link>
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
      <div className="action-buttons">
        <Link to="/registration">Create Account</Link>
        <Link to="/explore">Browse Devices</Link>
      </div>
    </section>

    <Footer />
  </>
);

export default Home;
