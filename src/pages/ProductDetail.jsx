/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/ProductDetail.css'; // Import custom CSS for styling

// Sample product data
const products = [
  { id: 1, name: 'Bulb', price: 29.99, description: 'Brighten up your space with our energy-efficient LED bulb. Long-lasting, eco-friendly, and perfect for any room. Save on electricity while enjoying superior lighting quality. Ideal for home or office!', image: '/public/images/product1.avif' },
  { id: 2, name: 'Men Fashion', price: 149.99, description: 'Upgrade your wardrobe with our stylish mens fashion collection. From casual to formal, find the perfect outfit for every occasion. Premium quality, comfortable fit, and trend-setting designs. Shop now!', image: '/public/images/product2.avif' },
  { id: 3, name: 'Kitchen', price: 239.99, description: 'Transform your kitchen with our premium kitchen set. Featuring durable, stylish cookware and utensils, its perfect for everyday cooking and special occasions. Elevate your culinary experience with quality and convenience!', image: '/public/images/product3.avif' },
  { id: 4, name: 'Badminton', price: 99.99, description: 'Take your game to the next level with our high-performance badminton gear. Lightweight racquets, durable shuttlecocks, and comfortable grips for enhanced control and precision. Perfect for players of all levels!', image: '/public/images/product4.avif' },
  { id: 5, name: 'Switch', price: 29.99, description: 'Upgrade your home or office with our reliable switch. Designed for durability and smooth operation, it ensures efficient control of your electrical devices. Sleek, modern design that fits any space.', image: '/public/images/product5.avif' },
  { id: 6, name: 'Hand Beg', price: 79.99, description: 'Elevate your style with our chic and versatile handbag collection. Crafted with premium materials, featuring spacious compartments and trendy designs, perfect for both casual and formal occasions. Stylish meets functional!', image: '/public/images/product6.avif' },
  { id: 7, name: 'Sofa', price: 189.99, description: 'Relax in style with our luxurious sofa. Designed for comfort and durability, it features plush cushions and a modern design, perfect for any living room. Elevate your home with cozy elegance!', image: '/public/images/product7.avif' },
  { id: 8, name: 'BasketBall', price: 60.99, description: 'Enhance your game with our premium basketball. Designed for superior grip and durability, it ensures excellent control on the court. Perfect for indoor and outdoor play, built to withstand intense action!', image: '/public/images/product8.avif' },
  { id: 9, name: 'Table Fan', price: 89.99, description: 'Stay cool with our powerful table fan. Compact, quiet, and energy-efficient, it offers adjustable speeds for personalized comfort. Perfect for home or office, providing a refreshing breeze in any space!', image: '/public/images/product9.avif' },
  { id: 10, name: 'Women Fashion', price: 129.99, description: 'Discover the latest in womens fashion with our stylish collection. From elegant dresses to casual wear, each piece is designed for comfort and flair. Elevate your wardrobe with trendy, timeless looks!', image: '/public/images/product10.avif' },
  { id: 11, name: 'Bed', price: 599.99, description: 'Experience ultimate comfort with our premium bed. Crafted with high-quality materials for durability and a restful nights sleep. Modern design meets luxurious support, perfect for transforming your bedroom into a haven.', image: '/public/images/product11.avif' },
  { id: 12, name: 'Football', price: 59.99, description: 'Boost your game with our high-quality football. Engineered for optimal control and durability, its perfect for both training and matches. Enjoy a superior playing experience on any field with this top-notch ball!', image: '/public/images/product12.avif' },
  { id: 13, name: 'Fashion', price: 159.99, description: 'Elevate your style with our latest fashion collection. Discover trendy, high-quality pieces that blend elegance and comfort. Perfect for any occasion, our designs help you stand out and feel confident. Shop now!', image: '/public/images/product13.jpg' },
  { id: 14, name: 'Women Jacket', price: 169.99, description: 'Stay warm and stylish with our women’s jacket collection. Crafted from premium materials, our jackets offer both comfort and sophistication. Perfect for layering in any season, adding a chic touch to your wardrobe.', image: '/public/images/product14.jpg' },
  { id: 15, name: 'Cloth', price: 179.99, description: 'Refresh your wardrobe with our versatile collection of cloth. From everyday essentials to elegant fabrics, our selection offers quality and style for every occasion. Find the perfect material for your next project or outfit!', image: '/public/images/product15.jpg' },
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
