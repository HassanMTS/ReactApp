import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Sell = () => (
  <>
    <Header />
    <section id="sell-banner">
      <img src="/images/sellpage.png" alt="Sell Your Device Banner" className="sell-banner-img" />
      <div className="sell-banner-text">
        <h2>Sell Your Device Easily</h2>
        <p>List your gadgets and get offers from buyers instantly!</p>
      </div>
    </section>
    <section className="steps-container sell-steps">
      <div className="step">
        <div className="step-number">1</div>
        <h3>Fill the Form</h3>
        <p>Provide details about your device including model, condition, and price.</p>
      </div>
      <div className="step">
        <div className="step-number">2</div>
        <h3>Submit for Review</h3>
        <p>Our team reviews your submission to ensure it meets quality standards.</p>
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <h3>Receive Offers & Sell</h3>
        <p>Get offers from buyers and finalize your sale securely through DeviceSwap.</p>
      </div>
    </section>
    <section className="how-it-works sell-form-section">
      <h2>List Your Device</h2>
      <p>
        Fill out the form below to submit your device for sale. By reselling instead of throwing away,
        you help reduce electronic waste and support more responsible consumption.
      </p>
      <div className="contact-section sell-form-wrapper">
        <form id="sellForm">
          <input type="text" name="device_name" placeholder="Device Name (e.g., iPhone 13)" required />
          <input type="text" name="condition" placeholder="Condition (New, Used, Broken)" required />
          <input type="number" name="price" placeholder="Expected Price (£)" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="additional_info" rows="4" placeholder="Additional Info (optional)"></textarea>
          <button type="submit">List Device</button>
        </form>
      </div>
    </section>
    <Footer />
  </>
);

export default Sell;
