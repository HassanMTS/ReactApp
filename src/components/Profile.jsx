import React from "react";
import { Link } from "react-router-dom";

const Profile = () => (
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
    <main className="page-grid">
      <section id="profile" className="card profile-card">
        <div className="card-header">
          <h2>View Profile</h2>
          <button id="editProfileBtn" className="btn small">Edit</button>
        </div>
        <div id="profileView">
          <div className="profile-row">
            <img className="profile-photo" src="../images/saiki-pfp.jpg" alt="Profile Photo" />
            <div className="profile-info">
              <h3 id="displayName">Dia JK </h3>
              <p id="displayEmail">dia.jk@example.com</p>
              <p id="displayBio" className="muted">Bio: A DeviceSwap community member.</p>
              <p id="displayPhone" className="muted">Phone: +44 7000 000000</p>
              <p id="displayAddress" className="muted">Address: London, UK</p>
            </div>
          </div>
        </div>
        <form id="profileForm" className="hidden">
          <label>
            Profile Photo
            <input id="inputPhoto" name="photo" type="file" accept="image/*" />
          </label>
          <label>
            Full name
            <input id="inputName" name="name" type="text" value="Dia Khan" />
          </label>
          <label>
            Email
            <input id="inputEmail" name="email" type="email" value="dia.khan@example.com" />
          </label>
          <label>
            Bio
            <textarea id="inputBio" name="bio">A DeviceSwap community member.</textarea>
          </label>
          <label>
            Phone
            <input id="inputPhone" name="phone" type="text" value="+44 7000 000000" />
          </label>
          <label>
            Address
            <input id="inputAddress" name="address" type="text" value="London, UK" />
          </label>
          <div className="form-actions">
            <button type="button" id="saveProfile" className="btn primary">Save</button>
            <button type="button" id="cancelEdit" className="btn">Cancel</button>
          </div>
        </form>
      </section>
      <section id="dashboard" className="card dashboard-card">
        <div className="card-header">
          <h2>Dashboard</h2>
        </div>
        <div className="card-body">
          <div className="stat-grid">
            <div className="stat">
              <div className="stat-value" id="itemsSold">5</div>
              <div className="stat-label">Items sold</div>
            </div>
            <div className="stat">
              <div className="stat-value" id="itemsBought">3</div>
              <div className="stat-label">Items bought</div>
            </div>
            <div className="stat">
              <div className="stat-value" id="activeListings">2</div>
              <div className="stat-label">Active listings</div>
            </div>
            <div className="stat">
              <div className="stat-value" id="wishCount">4</div>
              <div className="stat-label">Wishlist items</div>
            </div>
          </div>
          <h3 className="subtle">Recent activity</h3>
          <ul id="activityList" className="list muted">
            <li>Sold: iPhone 12 Pro — £250</li>
            <li>Bought: Pixel 6 — £300</li>
            <li>Listed: Nintendo Switch — £180</li>
          </ul>
        </div>
      </section>
      <section id="wishlist" className="card wishlist-card">
        <div className="card-header">
          <h2>Wishlist</h2>
        </div>
        <div className="card-body">
          <ul id="wishlistItems" className="list">
            <li>
              <span>MacBook Pro 16"</span>
              <div className="wish-actions">
                <button className="btn tiny move-to-cart">Add to 🛒</button>
                <button className="btn tiny remove-wish">Remove</button>
              </div>
            </li>
            <li>
              <span>Sony WH-1000XM4</span>
              <div className="wish-actions">
                <button className="btn tiny move-to-cart">Add to 🛒</button>
                <button className="btn tiny remove-wish">Remove</button>
              </div>
            </li>
            <li>
              <span>Nintendo Switch</span>
              <div className="wish-actions">
                <button className="btn tiny move-to-cart">Add to 🛒</button>
                <button className="btn tiny remove-wish">Remove</button>
              </div>
            </li>
          </ul>
          <p className="muted small">Click items in Dashboard or Explore to add them here.</p>
          <button id="exploreButton" className="btn tiny explore-btn">Go to Explore</button>
        </div>
      </section>
      <section id="rewards" className="card rewards-card">
        <div className="card-header">
          <h2>Rewards</h2>
        </div>
        <div className="card-body">
          <div className="points-row">
            <div className="points-display">
              <div className="points-number" id="points">340</div>
              <div className="muted">Total points</div>
            </div>
            <div className="points-progress">
              <label className="small muted">Progress to next tier</label>
              <div className="progress">
                <div id="progressFill" className="progress-fill" style={{width: '68%'}}></div>
              </div>
              <div className="muted small">680 / 1000 points to Platinum</div>
            </div>
          </div>
          <div className="how-to">
            <h4>How to earn points</h4>
            <ul className="muted">
              <li>Sell a device: +100 points</li>
              <li>Buy a device: +50 points</li>
              <li>Leave a review: +10 points</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="shipping" className="card shipping-card">
        <div className="card-header">
          <h2>Shipping Tracker</h2>
        </div>
        <div className="card-body">
          <label>
            Enter order number
            <input id="orderNumber" type="text" placeholder="e.g. DS-2025-12345" />
          </label>
          <div className="form-actions">
            <button id="trackBtn" className="btn primary">Track</button>
          </div>
          <div id="trackingResult" className="muted small" aria-live="polite"></div>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="container">
        <div>© 2025 DeviceSwap Inc.</div>
      </div>
    </footer>
  </>
);

export default Profile;
