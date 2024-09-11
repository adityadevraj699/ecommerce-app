/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/ProductDetail.css'; // Import custom CSS for styling

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 29.99, description: 'Detailed description for Product 1.', image: '/public/images/product1.avif' },
  { id: 2, name: 'Product 2', price: 39.99, description: 'Detailed description for Product 2.', image: '/public/images/product2.avif' },
  { id: 3, name: 'Product 3', price: 49.99, description: 'Detailed description for Product 3.', image: '/public/images/product3.avif' },
  { id: 4, name: 'Product 4', price: 59.99, description: 'Detailed description for Product 4.', image: '/public/images/product4.avif' },
  { id: 5, name: 'Product 5', price: 29.99, description: 'Detailed description for Product 5.', image: '/public/images/product5.avif' },
  { id: 6, name: 'Product 6', price: 39.99, description: 'Detailed description for Product 6.', image: '/public/images/product6.avif' },
  { id: 7, name: 'Product 7', price: 49.99, description: 'Detailed description for Product 7.', image: '/public/images/product7.avif' },
  { id: 8, name: 'Product 8', price: 59.99, description: 'Detailed description for Product 8.', image: '/public/images/product8.avif' },
  { id: 9, name: 'Product 9', price: 29.99, description: 'Detailed description for Product 9.', image: '/public/images/product9.avif' },
  { id: 10, name: 'Product 10', price: 39.99, description: 'Detailed description for Product 10.', image: '/public/images/product10.avif' },
  { id: 11, name: 'Product 11', price: 49.99, description: 'Detailed description for Product 11.', image: '/public/images/product11.avif' },
  { id: 12, name: 'Product 12', price: 59.99, description: 'Detailed description for Product 12.', image: '/public/images/product12.avif' },
  { id: 13, name: 'Product 13', price: 39.99, description: 'Detailed description for Product 13.', image: '/public/images/product13.jpg' },
  { id: 14, name: 'Product 14', price: 49.99, description: 'Detailed description for Product 14.', image: '/public/images/product14.jpg' },
  { id: 15, name: 'Product 15', price: 59.99, description: 'Detailed description for Product 15.', image: '/public/images/product15.jpg' },
];

const ProductDetail = ({ cart, setCart, wishlist, setWishlist }) => {
  const { id } = useParams();  // Get the product id from the URL
  const navigate = useNavigate();  // React Router navigate hook
  const [product, setProduct] = useState(null);  // State to hold the product data

  // Fetch the product based on the id from the params
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = products.find(p => p.id === parseInt(id));
      setProduct(productData);  // Set the fetched product
    };

    fetchProduct();  // Call the fetch function
  }, [id]);

  // Toggle wishlist functionality
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const isWishlisted = prev.some(item => item.id === productId);
      if (isWishlisted) {
        return prev.filter(item => item.id !== productId);  // Remove from wishlist
      } else {
        // Add complete product details to wishlist
        const productToAdd = products.find(p => p.id === productId);
        return [...prev, { ...productToAdd, date: new Date() }];
      }
    });
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  // Handle Add to Cart with confirmation to navigate to cart
  const handleAddToCart = () => {
    const isProductInCart = cart.some(item => item.id === product.id);
    if (isProductInCart) {
      alert('You have already added this product to the cart.');
    } else {
      setCart((prev) => [...prev, product]);  // Add product to cart

      const userWantsToGoToCart = window.confirm("Product added to cart. Do you want to view your cart?");
      if (userWantsToGoToCart) {
        navigate('/cart');  // Navigate to the cart page
      }
    }
  };

  // Handle Buy Now, which navigates to checkout with the product
  const handleBuyNow = () => {
    navigate('/checkout', { state: { product, quantity: 1 } });
  };

  // Loading state while fetching product
  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Container className="product-detail-container">
      <Row className="mt-5">
        <Col md={6} className="position-relative">
          <img src={product.image} alt={product.name} className="img-fluid product-image" />
          <div 
            className={`wishlist-icon ${isInWishlist(product.id) ? 'in-wishlist' : 'not-in-wishlist'}`} 
            onClick={() => toggleWishlist(product.id)}
          >
            {isInWishlist(product.id) ? <FaHeart /> : <FaRegHeart />}
          </div>
        </Col>
        <Col md={6}>
          <h1 className="product-title">{product.name}</h1>
          <h3 className="product-price">${product.price.toFixed(2)}</h3>
          <p className="product-description">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="primary" onClick={handleAddToCart} className="action-button">Add to Cart</Button>
            <Button variant="success" onClick={handleBuyNow} className="action-button">Buy Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
