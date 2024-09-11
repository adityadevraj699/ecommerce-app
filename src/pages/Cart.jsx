/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import '../styles/Cart.css';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, product) => {
    const price = Number(product.price);
    const quantity = Number(product.quantity);
    return sum + (price * quantity);
  }, 0);

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: Number(quantity) };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart, totalPrice } });
  };

  return (
    <Container>
      <h1 className="mt-5">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Button variant="primary" onClick={() => navigate('/products')}>Browse Products</Button></p>
      ) : (
        <div>
          <Row>
            {cart.map(product => (
              <Col key={product.id} md={4}>
                <div className="cart-item">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                  <h5>{product.name}</h5>
                  <p>Price: ${Number(product.price).toFixed(2)}</p>
                  <Form.Group controlId={`quantity-${product.id}`} className="mb-3">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                    <FaTrash /> Remove
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
          <div className="mt-4">
            <h4>Total Price: {totalPrice.toFixed(2)}</h4>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <Button variant="primary" onClick={handleCheckout} className="mt-3">
          Proceed to Checkout
        </Button>
      )}
    </Container>
  );
};

export default Cart;
