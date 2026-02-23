import React from "react";
import Header from "./Header";

const ResetPassword = () => (
  <>
    <Header />
    <div className="h-20"></div>
    <div className="page-container">
      <h1 className="title">Reset Password</h1>
      <div className="card">
        {/* Email step */}
        <div id="email-section">
          <label className="label" htmlFor="email-input">Enter Email:</label>
          <input type="email" id="email-input" className="input-box" placeholder="Example@gmail.com" autoComplete="email" />
          <p className="error-msg" id="email-error"></p>
          <p className="helper-text" id="email-helper">
            A code will be sent to your Email address after confirming.
          </p>
          <div className="row">
            <button className="btn" id="email-confirm-btn">Confirm</button>
          </div>
        </div>
        <hr className="divider" />
        {/* Code step */}
        <div id="code-section" className="fade-in" style={{display:'none'}}>
          <label className="label" htmlFor="code-input">Enter code:</label>
          <input type="text" id="code-input" className="input-box" placeholder="Your personal 9 digit code" inputMode="numeric" pattern="[0-9]*" autoComplete="one-time-code" />
          <p className="error-msg" id="code-error"></p>
          <div className="row">
            <button className="btn" id="code-confirm-btn">Confirm</button>
          </div>
        </div>
      </div>
    </div>
    {/* Popup: New password */}
    <div id="password-popup" className="popup-bg" style={{display:'none'}}>
      <div className="popup" role="dialog" aria-modal="true">
        <h2 className="popup-title">Create New Password</h2>
        <input type="password" id="new-pass" className="input-box" placeholder="New password" autoComplete="new-password" />
        <input type="password" id="confirm-pass" className="input-box" placeholder="Confirm password" autoComplete="new-password" />
        <p className="error-msg" id="password-error"></p>
        {/* Strength bar */}
        <div id="strength-bar" className="strength-bar">
          <div id="strength-fill"></div>
        </div>
        <div className="row">
          <button className="btn" id="save-password-btn">Save Password</button>
        </div>
      </div>
    </div>
  </>
);

export default ResetPassword;
