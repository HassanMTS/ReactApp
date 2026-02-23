import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Aboutus = () => (
  <>
    <Header />
    <main className="site-content">
      {/* ABOUT SECTION */}
      <section className="about-section">
        <h1>About DeviceSwap</h1>
        <p>
          At DeviceSwap, we believe every device deserves a second life. Whether you're looking for affordable electronics, want to sell your used gadgets, or need professional repair services, we've got you covered. With our easy-to-use platform, verified sellers, certified devices, and transparent pricing, DeviceSwap has you covered.
        </p>
        <p>
          Our mission is to reduce electronic waste by extending the life of devices. Instead of throwing away gadgets that can still be repaired or reused, DeviceSwap helps people buy, sell, and fix electronics responsibly in line with <strong>UN Sustainable Development Goal 12 – Responsible Consumption and Production</strong>.
        </p>
      </section>
      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Browse & Select</h3>
            <p>Explore our wide selection of devices. Filter by category, price, and condition to find what you need.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Secure Purchase</h3>
            <p>Complete your purchase with our secure payment gateway. All transactions are protected.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Fast Shipping</h3>
            <p>Your device is packed carefully and shipped quickly to your doorstep with tracking.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Enjoy & Support</h3>
            <p>Enjoy your new device! Our support team is here if you need any help.</p>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form onSubmit={e => { e.preventDefault(); alert('Message sent successfully! (Front-end only)'); }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required maxLength={50} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required rows={5}></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </section>
    </main>
    <Footer />
  </>
);

export default Aboutus;
