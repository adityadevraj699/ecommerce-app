/* eslint-disable no-unused-vars */
// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Simplified Contact and About Section */}
          <div className="footer-info">
            <p>Email: fashionhub@gmail.com | Phone: 123-456-7890</p>
            <p>&copy; 2024 Fashion Hub. ADITYA KUMAR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
