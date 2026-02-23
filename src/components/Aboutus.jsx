import React from "react";
import { Link } from "react-router-dom";

const Aboutus = () => (
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
    <main className="site-content">
      <section className="about-section">
        <h1>About DeviceSwap</h1>
        <p>
          DeviceSwap is your one-stop platform for buying, selling, and repairing devices.
          We make it easy to keep your memories alive, trade gadgets safely, and stay connected
          to the world of technology. Whether you want to browse affordable pre-owned gadgets,
          sell your old devices quickly with instant approval, or get professional repairs with
          transparent pricing, DeviceSwap has you covered.
        </p>
        <p>
          Our mission is to reduce electronic waste by extending the life of devices.
          Instead of throwing away gadgets that can still be repaired or reused, DeviceSwap
          helps people buy, sell, and fix electronics responsibly in line with
          <strong>UN Sustainable Development Goal 12 – Responsible Consumption and Production</strong>.
        </p>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Browse or List</h3>
            <p>Explore our collection of devices or list your own gadget in minutes.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Connect</h3>
            <p>Communicate with buyers or sellers through our secure messaging system.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Complete Transaction</h3>
            <p>Finalize your purchase or sale with our safe and simple payment process.</p>
          </div>
        </div>
      </section>
      <section className="contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact Us</h2>
        <form id="contactForm">
          <input type="text" id="name" name="name" placeholder="Your Name" />
          <input type="email" id="email" name="email" placeholder="Your Email" />
          <textarea id="message" name="message" placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
    <footer>
      © 2025 DeviceSwap — All Rights Reserved
    </footer>
  </>
);

export default Aboutus;
