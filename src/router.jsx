/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment'; // Import Payment component
import Wishlist from './pages/Wishlist'; // Import Wishlist component
import MainLayout from './layouts/MainLayout'; // Import MainLayout

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} /> {/* Add Payment route */}
          <Route path="/wishlist" element={<Wishlist />} /> {/* Add Wishlist route */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
