/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import '../styles/Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract data from location state
  const { paymentMethod, name, address, cart, totalPrice } = location.state || {};

  if (!totalPrice || isNaN(totalPrice)) {
    // Handle the case where totalPrice is not a valid number
    return (
      <Container className="payment-container">
        <h1 className="mt-5">Payment</h1>
        <p>Error: Invalid total price.</p>
      </Container>
    );
  }

  return (
    <Container className="payment-container">
      <h1 className="mt-5 heading">Payment</h1>
      <p>You have selected {paymentMethod}. Please proceed with the payment.</p>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Order Summary</Card.Title>
          <Card.Text>
            <strong>Name:</strong> {name}<br />
            <strong>Address:</strong> {address}<br />
            <strong>Payment Method:</strong> {paymentMethod}<br />
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </Card.Text>
          <Card.Text>
            {cart.map((product, index) => (
              <div key={index}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)} x {product.quantity}<br />
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Add payment gateway integration or instructions here */}
      <Button variant="primary" onClick={() => {
        alert(`Payment completed successfully using ${paymentMethod}.Thank you for your order! It being processed and will ship soon. Enjoy your purchase!`);
        navigate('/products');
      }}>Complete Payment</Button>
    </Container>
  );
};

export default Payment;
