import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        JioSaavn
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-links">
        <a href="/music">Music</a>
        <a href="/podcasts">Podcasts</a>
        <a href="/go-pro">Go Pro</a>
      </div>
      <div className="navbar-auth">
        <button className="auth-button">Log In</button>
        <button className="auth-button auth-button-signup">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;