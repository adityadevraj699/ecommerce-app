/* eslint-disable no-unused-vars */


import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Trending.css'; 

const trendingProducts = [
  { id: 1, name: 'Bulb', price: '29.99', imageUrl: '/images/product1.avif' },
  { id: 2, name: 'Men Fashion', price: '149.99', imageUrl: '/images/product2.avif' },
  { id: 3, name: 'Kitchen', price: '239.99', imageUrl: '/images/product3.avif' },
  { id: 4, name: 'Badminton', price: '99.99', imageUrl: '/images/product4.avif' },
  { id: 13, name: 'Fashion', price: '$159.00', imageUrl: '/images/product13.jpg' },
  { id: 14, name: 'Women Jacket', price: '$169.00', imageUrl: '/images/product14.jpg' },
  { id: 15, name: 'Cloth', price: '$179.00', imageUrl: '/images/product15.jpg' },
  
];

const Trending = () => {
  return (
    <section className="trending-section">
      <div className="container">
        <h2 className="text-center mb-4 heading">Trending Products</h2>
        <div className="row">
          {trendingProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
