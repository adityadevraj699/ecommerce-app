/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { useState, memo } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/Home.css';

const CategoryCard = memo(({ category, navigate }) => (
  <Col key={category.name} md={3} sm={6} xs={12} className="mb-4">
    <div className="category-card" onClick={() => navigate(`/products?category=${category.name}`)}>
      <img src={category.image} alt={category.name} className="img-fluid category-image" />
      <h5 className="category-name text-center mt-3">{category.name}</h5>
    </div>
  </Col>
));

const ProductCard = memo(({ id }) => (
  <Col key={id} md={4} sm={6} xs={12}>
    <div className="product-card">
      <img src={`/images/product${id}.jpg`} alt={`Product ${id}`} className="img-fluid" />
      <p>${29.99 + id * 10}</p>
      <Button variant="primary" as={Link} to={`/product/${id}`}>View Details</Button>
    </div>
  </Col>
));

const Home = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const isWishlisted = prev.includes(productId);
      return isWishlisted ? prev.filter(id => id !== productId) : [...prev, productId];
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const categories = [
    { name: 'Electronics', image: '/images/electronics.jpg' },
    { name: 'Fashion', image: '/images/fashion.jpg' },
    { name: 'Home', image: '/images/home.jpg' },
    { name: 'Sports', image: '/images/sports.jpg' }
    
  ];

  return (
    <Container fluid>
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Top Deals</h3>
            <Button as={Link} to="/products" variant="light">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Latest Products</h3>
            <Button as={Link} to="/products" variant="light">Browse Products</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Categories Section */}
      <div className="categories-section mt-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <Row>
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} navigate={navigate} />
          ))}
        </Row>
      </div>

      {/* Top Deals Section */}
      <Row className="mt-5">
        <h2 className="text-center mb-4">Today Best Deals</h2>
        {['13', '14', '15'].map(id => (
          <ProductCard key={id} id={id} />
        ))}
      </Row>

      {/* Special Offers Section */}
      <div className="offers-section mt-5">
        <h2 className="text-center mb-4">Special Offers</h2>
        <Row>
          <Col md={6} sm={12}>
            <div className="offer-card">
              <img src="/images/offer1.avif" alt="Offer 1" className="img-fluid" />
              <h3 className="offer-title">Buy One Get One Free</h3>
              <Button as={Link} to="/products" variant="light">Shop Now</Button>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="offer-card">
              <img src="/images/offer2.avif" alt="Offer 2" className="img-fluid" />
              <h3 className="offer-title">Discount on Electronics</h3>
              <Button as={Link} to="/products" variant="light">Browse Deals</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
