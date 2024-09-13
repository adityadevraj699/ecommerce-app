/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Productlist.css';

const products = [
  { id: 1, name: 'Bulb', price: 29.99, image: '/images/product1.avif', category: 'Electronics' },
  { id: 2, name: 'Men Fashion', price: 149.99, image: '/images/product2.avif', category: 'Fashion' },
  { id: 3, name: 'Kitchen', price: 239.99, image: '/images/product3.avif', category: 'Home' },
  { id: 4, name: 'Badminton', price: 99.99, image: '/images/product4.avif', category: 'Sports' },
  { id: 5, name: 'Switch', price: 29.99, image: '/images/product5.avif', category: 'Electronics' },
  { id: 6, name: 'Hand Beg', price: 79.99, image: '/images/product6.avif', category: 'Fashion' },
  { id: 7, name: 'Sofa', price: 189.99, image: '/images/product7.avif', category: 'Home' },
  { id: 8, name: 'Basket Ball', price: 60.99, image: '/images/product8.avif', category: 'Sports' },
  { id: 9, name: 'Table Fan', price: 89.99, image: '/images/product9.avif', category: 'Electronics' },
  { id: 10, name: 'Women Fashion', price: 129.99, image: '/images/product10.avif', category: 'Fashion' },
  { id: 11, name: 'Bed', price: 599.99, image: '/images/product11.avif', category: 'Home' },
  { id: 12, name: 'Football', price: 39.99, image: '/images/product12.avif', category: 'Sports' },
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
        <h1 className="mt-5 mb-4 heading">Our Products</h1>
        <p className="lead">Discover the best deals on top-rated products.</p>
      </div>

      {/* Filter options */}
      <Row className="mb-4 filter">
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
          <Button onClick={() => navigate('/products?category=Books')} variant={filterCategory === 'Books' ? 'dark' : 'light'}>
            Books
          </Button>
          <Button onClick={() => navigate('/products?category=Toys')} variant={filterCategory === 'Toys' ? 'dark' : 'light'}>
            Toys
          </Button>
          <Button onClick={() => navigate('/products?category=Beauty')} variant={filterCategory === 'Beauty' ? 'dark' : 'light'}>
            Beauty
          </Button>
          <Button onClick={() => navigate('/products?category=Automotive')} variant={filterCategory === 'Automotive' ? 'dark' : 'light'}>
            Automotive
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
