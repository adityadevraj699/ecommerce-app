/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';  // Import your Navbar component
import Footer from '../components/Footer';  // Import your Footer component (if any)

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer /> {/* Optionally add a footer here */}
    </div>
  );
};

export default MainLayout;
