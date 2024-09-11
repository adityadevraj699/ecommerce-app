/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic here
    navigate('/login');
  };

  // Redirect to login if no user is logged in
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        {user.profilePic ? (
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
        ) : (
          <FaUserCircle size={100} />
        )}
        <h2>{user.name}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="profile-details">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>Address:</strong> {user.address}</p>

        <div className="order-history">
          <h4>Order History</h4>
          {user.orders.map(order => (
            <div key={order.id}>
              <p><strong>Item:</strong> {order.item}</p>
              <p><strong>Date:</strong> {order.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
