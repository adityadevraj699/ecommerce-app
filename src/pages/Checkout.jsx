/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const productsInCart = location.state?.cart || [];
  const singleProduct = location.state?.product || null;
  const isSingleProduct = !!singleProduct;

  const [form, setForm] = useState({
    name: '',
    address: '',
    paymentMethod: ''
  });
  const [quantity, setQuantity] = useState(isSingleProduct ? 1 : 0);

  // Calculate total price and quantity
  const totalPrice = isSingleProduct
    ? singleProduct.price * quantity
    : productsInCart.reduce((total, product) => total + (product.price * product.quantity), 0);

  const totalQuantity = isSingleProduct
    ? quantity
    : productsInCart.reduce((total, product) => total + product.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      ...form,
      cart: isSingleProduct ? [{ ...singleProduct, quantity }] : productsInCart,
      totalPrice
    };

    navigate('/payment', { state: orderDetails });
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setForm(prevForm => ({ ...prevForm, paymentMethod: value }));

    switch (value) {
      case 'UPI':
        alert('Please open your UPI app to complete the payment.');
        break;
      case 'Net Banking':
        alert('Please proceed to your net banking portal to complete the payment.');
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <h1 className="mt-5">Checkout</h1>
      <Row className="mb-4">
        <Col md={12}>
          <div className="product-details">
            {isSingleProduct ? (
              <div className="product-detail-single">
                <img src={singleProduct.image} alt={singleProduct.name} className="img-fluid" />
                <div className="product-info">
                  <h3>{singleProduct.name}</h3>
                  <p>${singleProduct.price.toFixed(2)}</p>
                  <p>{singleProduct.description}</p>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
            ) : (
              productsInCart.map((product, index) => (
                <div key={index} className="product-detail-cart">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </div>
              ))
            )}
            <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
            <h4 className="total-quantity">Total Quantity: {totalQuantity}</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form onSubmit={handleSubmit} className='Form'>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your shipping address"
                rows={3}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handlePaymentMethodChange}
                required
              >
                <option value="">Select a payment method</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Complete Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
