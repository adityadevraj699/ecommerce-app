/* eslint-disable no-unused-vars */
// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';  // Custom styles for the Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Fashion Hub. ADITYA KUMAR....</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
