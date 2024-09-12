// src/pages/Offers.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Offer.css';

const offerItems = [
  {
    id: 1,
    title: 'Electronics Sale',
    description: 'Up to 50% off on selected electronics.',
    imageUrl: '/images/offer-Electronics.jpg',
    category: 'Electronics',
    link: '/products?category=Electronics',
  },
  {
    id: 2,
    title: 'Fashion Deals',
    description: 'Save up to 50% on men’s and women’s fashion.',
    imageUrl: '/images/offer1.jpg',
    category: 'Fashion',
    link: '/products?category=Fashion',
  },
  {
    id: 3,
    title: 'Home Appliances',
    description: 'Exclusive discounts on home appliances.',
    imageUrl: '/images/offer-Home-Applicance.avif',
    category: 'Home',
    link: '/products?category=Home',
  },
  {
    id: 4,
    title: 'Sports Equipment',
    description: 'Up to 40% off on selected sports gear.',
    imageUrl: '/images/offer-sports.avif',
    category: 'Sports',
    link: '/products?category=Sports',
  },
  
];

const Offers = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <section className="offers-section">
      <div className="container">
        <h2 className="text-center mb-5 heading">Special Offers</h2>
        <div className="row">
          {offerItems.map(offer => (
            <div className="col-md-6 mb-4" key={offer.id}>
              <div className="offer-card" onClick={() => handleCategoryClick(offer.category)}>
                <img src={offer.imageUrl} className="offer-img" alt={offer.title} />
                <div className="offer-content">
                  <h4 className="offer-title">{offer.title}</h4>
                  <p className="offer-description">{offer.description}</p>
                  <button className="btn btn-primary" onClick={() => handleCategoryClick(offer.category)}>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
