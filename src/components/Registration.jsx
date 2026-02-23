import React from "react";
import { Link } from "react-router-dom";

const Registration = () => (
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
    <main className="flex justify-center items-start pt-32 pb-16 min-h-screen">
      <section className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <form noValidate>
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Create Account</h2>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required maxLength={50} className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500" /><br />
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500" /><br />
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required minLength={8} className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500" /><br />
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="repPassword">Re-type password:</label>
          <input type="password" id="repPassword" name="repPassword" required minLength={8} className="w-full p-2 border border-gray-300 rounded-lg mb-6 focus:ring-indigo-500 focus:border-indigo-500" /><br />
          <p className="block text-sm font-medium text-gray-700 mb-2">I am interested in:</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start">
              <input type="checkbox" id="buyer" name="buyer" value="buyer" className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1 focus:ring-indigo-500" />
              <label htmlFor="buyer" className="ml-2 text-sm text-gray-900">Buying pre-owned devices.</label>
            </div>
            <div className="flex items-start">
              <input type="checkbox" id="seller" name="seller" value="seller" className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1 focus:ring-indigo-500" />
              <label htmlFor="seller" className="ml-2 text-sm text-gray-900">Selling or swapping my devices.</label>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <input type="checkbox" id="tos" name="tos" value="tos" required className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1 focus:ring-indigo-500" />
            <label htmlFor="tos" className="ml-2 text-sm text-gray-900">I agree to the <a href="" className="text-indigo-600 hover:text-indigo-800 font-medium">Terms of Use</a> and <a href="" className="text-indigo-600 hover:text-indigo-800 font-medium">Privacy Policy</a>.</label>
          </div>
          <input type="button" id="button" value="Register" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer" />
          <a href="" className="block text-center text-sm text-indigo-600 hover:text-indigo-800 mt-3 font-medium">Learn more</a>
        </form>
        <div id="hiddenSection" className="mt-6 p-4 border border-green-400 bg-green-100 text-green-700 rounded-lg hidden">
          <p id="hiddenParagraph"></p>
        </div>
      </section>
    </main>
    <footer className="text-center py-6 bg-gray-900 text-white">
      © 2025 DeviceSwap — All Rights Reserved
    </footer>
  </>
);

export default Registration;
