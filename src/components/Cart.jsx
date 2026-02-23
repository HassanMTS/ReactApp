import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => (
  <>
    <Header />
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
    <Footer />
  </>
);

export default Cart;
