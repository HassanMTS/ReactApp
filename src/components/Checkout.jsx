import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => (
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
    <div className="container">
      <div className="checkout-steps">
        <div className="step active">
          <span className="step-number">1</span>
          Shopping Cart
        </div>
        <div className="step active">
          <span className="step-number">2</span>
          Checkout Details
        </div>
        <div className="step">
          <span className="step-number">3</span>
          Order Confirmation
        </div>
      </div>
      <div className="checkout-container">
        <div className="order-summary">
          <h2 className="section-title">Your Order</h2>
          <div className="product-list">
            <div className="product-item">
              <div className="product-image">
                <i className="fas fa-laptop" style={{fontSize: "40px", color: "#4a6cf7"}}></i>
              </div>
              <div className="product-details">
                <div className="product-name">Laptop</div>
                <div className="product-quantity">Qty: 1</div>
                <div className="product-price">£1099</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <i className="fas fa-headphones" style={{fontSize: "40px", color: "#ff6b6b"}}></i>
              </div>
              <div className="product-details">
                <div className="product-name">Premium Headphones</div>
                <div className="product-quantity">Qty: 1</div>
                <div className="product-price">£159</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <i className="fas fa-mobile" style={{fontSize: "40px", color: "#6bcf7f"}}></i>
              </div>
              <div className="product-details">
                <div className="product-name">Smartphone</div>
                <div className="product-quantity">Qty: 1</div>
                <div className="product-price">£699</div>
              </div>
            </div>
          </div>
          <div className="order-total">
            <div className="total-row">
              <span>Subtotal</span>
              <span>£1957</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>£15</span>
            </div>
            <div className="total-row">
              <span>Tax</span>
              <span>£391.4</span>
            </div>
            <div className="total-row final">
              <span>Total</span>
              <span>£1972</span>
            </div>
          </div>
        </div>
        <div className="checkout-form">
          <h2 className="section-title">Checkout Details</h2>
          <form id="checkoutForm">
            <h3>Contact Information</h3>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required placeholder="example@hotmail.com" />
            </div>
            <h3>Shipping Address</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" required placeholder="John" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" required placeholder="smith" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" required placeholder="street,number" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" required placeholder="London" />
              </div>
              <div className="form-group">
                <label htmlFor="postcode">Postcode</label>
                <input type="text" id="postcode" required placeholder="SL1 4WE" />
              </div>
            </div>
            <h3>Payment Method</h3>
            <div className="payment-methods">
              <div className="payment-method selected" id="creditCard">
                <div className="payment-icon">
                  <i className="far fa-credit-card"></i>
                </div>
                <div>Credit Card</div>
              </div>
              <div className="payment-method" id="paypal">
                <div className="payment-icon">
                  <i className="fab fa-paypal"></i>
                </div>
                <div>PayPal</div>
              </div>
              <div className="payment-method" id="applePay">
                <div className="payment-icon">
                  <i className="fab fa-apple-pay"></i>
                </div>
                <div>Apple Pay</div>
              </div>
            </div>
            <div id="creditCardForm">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input type="text" id="expiry" />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cardName">Name on Card</label>
                <input type="text" id="cardName" />
              </div>
            </div>
            <div className="form-group" style={{marginTop: "20px"}}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" style={{display: "inline", fontWeight: "normal"}}>
                I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="btn">
              <i className="fas fa-lock"></i> Complete Secure Purchase
            </button>
          </form>
        </div>
      </div>
      <footer>
        <p>© 2025 Device Swap. All rights reserved.</p>
      </footer>
    </div>
  </>
);

export default Checkout;
