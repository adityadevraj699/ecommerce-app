/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaHeart, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';  // Custom styles for the Navbar

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to handle the nav menu visibility
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the nav menu visibility
  };

  const handleNavLinkClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false); // Hide navbar on link click
    }
  };

  const handleSearchClick = () => {
    navigate('/search'); // Redirect to the search page
    if (isNavOpen) {
      setIsNavOpen(false); // Hide navbar on search click
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand logo">Fashion Hub</NavLink>

        {/* Mobile Menu Toggle */}
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />} {/* Toggle between menu and close icon */}
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" onClick={handleNavLinkClick}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/trending" className="nav-link" onClick={handleNavLinkClick}>Trending</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/offers" className="nav-link" onClick={handleNavLinkClick}>Offers</NavLink>
            </li>
          </ul>

          {/* Search Icon */}
          <div className="d-flex search-icon" onClick={handleSearchClick}>
            <FaSearch />
          </div>

          {/* Icons */}
          <div className={`navbar-icons ${isNavOpen ? 'show' : ''}`}>
            <NavLink to="/cart" className="nav-icon" onClick={handleNavLinkClick}><FaShoppingCart /></NavLink>
            <NavLink to="/profile" className="nav-icon" onClick={handleNavLinkClick}><FaUser /></NavLink>
            <NavLink to="/wishlist" className="nav-icon" onClick={handleNavLinkClick}><FaHeart /></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
