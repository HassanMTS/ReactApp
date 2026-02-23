import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Settings = () => (
  <>
    <Header />
    <div className="h-20"></div>
    <div className="container">
      <h1 className="title">
        <img src="/images/settings-cog.png" className="title-icon" alt="Settings" />
        <span className="title-text">Settings</span>
      </h1>
      <div className="settings-card">
        {/* Dark mode */}
        <h2 className="section-title">Appearance</h2>
        <div className="setting-row">
          <div>
            <h3 className="setting-title">Dark Mode</h3>
            <p className="setting-desc">Toggle between light and dark themes.</p>
          </div>
          {/* Dark mode button */}
          <label className="toggle">
            <input type="checkbox" id="darkModeToggle" />
            <span className="slider"></span>
          </label>
        </div>
        {/* Language part */}
        <div className="divider"></div>
        <h2 className="section-title">Language</h2>
        <div className="setting-row-column">
          <label htmlFor="language" className="setting-desc">Choose your preferred language.</label>
          <select id="language" className="select-box">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="ar">العربية</option>
          </select>
        </div>
        {/* Currency dropdown */}
        <div className="divider"></div>
        <h2 className="section-title">Currency</h2>
        <div className="setting-row-column">
          <label htmlFor="currency" className="setting-desc">Select your preferred currency.</label>
          <select id="currency" className="select-box">
            <option value="GBP">GBP (£)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="JPY">JPY (¥)</option>
            <option value="AUD">AUD (A$)</option>
          </select>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Settings;
