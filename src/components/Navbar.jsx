/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaHeart, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); 
  };

  const handleNavLinkClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const handleSearchClick = () => {
    navigate('/search'); 
    if (isNavOpen) {
      setIsNavOpen(false); 
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
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" onClick={handleNavLinkClick}>Proxfcghjkljhgfxdghjklduct</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/trending" className="nav-link" onClick={handleNavLinkClick}>Trending</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/offers" className="nav-link" onClick={handleNavLinkClick}>Offers</NavLink>
            </li>
          </ul>

          

          {/* Icons */}
          <div className={`navbar-icons ${isNavOpen ? 'show' : ''}`}>
            {/* Search Icon */}
          <div className="d-flex search-icon" onClick={handleSearchClick}>
            <FaSearch />
          </div>
            <NavLink to="/cart" className="nav-icon" onClick={handleNavLinkClick}><FaShoppingCart /></NavLink>
            <NavLink to="/login" className="nav-icon" onClick={handleNavLinkClick}><FaUser /></NavLink>
            <NavLink to="/wishlist" className="nav-icon" onClick={handleNavLinkClick}><FaHeart /></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
