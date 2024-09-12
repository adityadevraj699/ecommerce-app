/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Offers from './pages/offers';
import Trending from './pages/Trending';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import SearchBar from './components/SearchBar'; // Import SearchBar component
import './styles/global.css'; // Global styles

const App = () => {
  const [user, setUser] = useState(null); // State for logged-in user
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <Router>
      <Navbar user={user} /> {/* Pass user to Navbar */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route 
            path="/product/:id" 
            element={<ProductDetail cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cart={cart} setCart={setCart} />} 
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/trending" element={<Trending />} />
          <Route 
            path="/login" 
            element={<Login setUser={setUser} />} // Set user state after login
          />
          <Route 
            path="/profile" 
            element={<Profile user={user} />} // Pass user details to Profile
          />
          <Route 
            path="/wishlist" 
            element={<Wishlist wishlist={wishlist} />} 
          />
          <Route path="/search" element={<SearchBar />} /> {/* Add SearchBar route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
