/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Productlist.css';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/public/images/product1.avif', category: 'Electronics' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/public/images/product2.avif', category: 'Fashion' },
  { id: 3, name: 'Product 3', price: 49.99, image: '/public/images/product3.avif', category: 'Home' },
  { id: 4, name: 'Product 4', price: 59.99, image: '/public/images/product4.avif', category: 'Sports' },
  { id: 5, name: 'Product 5', price: 69.99, image: '/public/images/product5.avif', category: 'Electronics' },
  { id: 6, name: 'Product 6', price: 79.99, image: '/public/images/product6.avif', category: 'Fashion' },
  { id: 7, name: 'Product 7', price: 89.99, image: '/public/images/product7.avif', category: 'Home' },
  { id: 8, name: 'Product 8', price: 99.99, image: '/public/images/product8.avif', category: 'Sports' },
  { id: 9, name: 'Product 9', price: 109.99, image: '/public/images/product9.avif', category: 'Electronics' },
  { id: 10, name: 'Product 10', price: 119.99, image: '/public/images/product10.avif', category: 'Fashion' },
  { id: 11, name: 'Product 11', price: 129.99, image: '/public/images/product11.avif', category: 'Home' },
  { id: 12, name: 'Product 12', price: 139.99, image: '/public/images/product12.avif', category: 'Sports' },
];

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryQuery = query.get('category') || 'All';

  const [filterCategory, setFilterCategory] = useState(categoryQuery);

  useEffect(() => {
    setFilterCategory(categoryQuery);
  }, [categoryQuery]);

  const filteredProducts = filterCategory === 'All'
    ? products
    : products.filter(product => product.category === filterCategory);

  return (
    <Container>
      <div className="text-center">
        <h1 className="mt-5 mb-4">Shop Our Products</h1>
        <p className="lead">Discover the best deals on top-rated products.</p>
      </div>

      {/* Filter options */}
      <Row className="mb-4">
        <Col>
          <Button onClick={() => navigate('/products?category=All')} variant={filterCategory === 'All' ? 'dark' : 'light'}>
            All
          </Button>
          <Button onClick={() => navigate('/products?category=Electronics')} variant={filterCategory === 'Electronics' ? 'dark' : 'light'}>
            Electronics
          </Button>
          <Button onClick={() => navigate('/products?category=Fashion')} variant={filterCategory === 'Fashion' ? 'dark' : 'light'}>
            Fashion
          </Button>
          <Button onClick={() => navigate('/products?category=Home')} variant={filterCategory === 'Home' ? 'dark' : 'light'}>
            Home
          </Button>
          <Button onClick={() => navigate('/products?category=Sports')} variant={filterCategory === 'Sports' ? 'dark' : 'light'}>
            Sports
          </Button>
        </Col>
      </Row>

      {/* Display products or 'No Products Found' message */}
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h5 className="product-title">{product.name}</h5>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <Button
                    variant="dark"
                    className="view-details-btn"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <div className="text-center">
            <h3>No products found for category {filterCategory}</h3>
            <p>Try searching for a different category.</p>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
