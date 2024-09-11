/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import '../styles/Wishlist.css'

const Wishlist = ({ wishlist }) => {
  return (
    <Container>
      <h1 className="mt-5">My Wishlist</h1>
      <Row>
        {wishlist.length === 0 ? (
          <Col><p>No items in wishlist.</p></Col>
        ) : (
          wishlist.map(item => (
            <Col md={4} key={item.id} className="mb-4">
              <div className="wishlist-item">
                <img src={item.image} alt={item.name} className="img-fluid wishlist-image" />
                <div className="wishlist-info">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Added on: {item.date.toLocaleDateString()}</p>
                </div>
    
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Wishlist;
