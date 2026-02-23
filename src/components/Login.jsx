import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => (
  <>
    <Header />
    <main className="flex justify-center items-start pt-32 pb-16 min-h-screen">
      <section className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <form noValidate>
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">User Login</h2>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500" /><br />
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required minLength={8} className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500" /><br />
          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" name="remember" value="remember" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <input type="button" id="loginButton" value="Login" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer" />
          <br /><br />
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <Link to="/registration" className="text-indigo-600 hover:text-indigo-800 font-medium">Register here</Link>
          </p>
          <p className="text-center text-sm text-gray-600 mt-2">
            <Link to="/reset-password" className="text-indigo-600 hover:text-indigo-800 font-medium">Forgot your password?</Link>
          </p>
        </form>
        <div id="hiddenSection" className="mt-6 p-4 border border-green-400 bg-green-100 text-green-700 rounded-lg hidden">
          <p id="hiddenParagraph"></p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Login;
