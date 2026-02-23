

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Explore from "./components/Explore";
import Sell from "./components/Sell";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
