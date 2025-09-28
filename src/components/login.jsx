import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Left section (form) */}
        <div className="auth-left">
          <div className="auth-header">
            <div className="logo-box">SB</div>
            <h2>{isLogin ? "Welcome Back 👋" : "Join SmartBuy 🚀"}</h2>
            <p className="auth-subtext">
              {isLogin
                ? "Log in to track prices and get smarter shopping suggestions."
                : "Create your free account and never overpay again."}
            </p>
          </div>

          {/* Animation wrapper */}
          <div className="auth-form-wrapper">
            {/* Login Form */}
            <form className={`auth-form ${isLogin ? "active" : ""}`}>
              <input type="email" placeholder="Email" className="auth-input" />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
              />
              <button type="submit" className="auth-btn">
                Login
              </button>
            </form>

            {/* Sign Up Form */}
            <form className={`auth-form ${!isLogin ? "active" : ""}`}>
              <input type="text" placeholder="Full Name" className="auth-input" />
              <input type="email" placeholder="Email" className="auth-input" />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="auth-input"
              />
              <button type="submit" className="auth-btn">
                Sign Up
              </button>
            </form>
          </div>

          {/* Toggle */}
          <p className="auth-toggle">
            {isLogin ? "New to SmartBuy?" : "Already have an account?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create one" : "Login"}
            </span>
          </p>
        </div>

        {/* Right section (image) */}
        <div className="auth-right">
          <img
            src="https://i.pinimg.com/736x/e9/e6/60/e9e660adc63200d89cd35934c8fa2a32.jpg"
            alt="Shopping illustration"
          />
        </div>
      </div>
    </div>
  );
}
