/* eslint-disable no-unused-vars */
// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';  // Custom styles for the Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Simplified Contact and About Section */}
          <div className="footer-info">
            <p>Email: support@fashionhub.com | Phone: +1 (800) 123-4567</p>
            <p>&copy; 2024 Fashion Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
