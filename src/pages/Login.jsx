/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate a login by creating a user object
    const loggedInUser = {
      name: 'John Doe',
      email: email,
      mobile: '123-456-7890',
      address: '123 Main St, New York, NY',
      orders: [
        { id: 1, item: 'Laptop', date: '2024-09-01' },
        { id: 2, item: 'Headphones', date: '2024-09-05' }
      ],
      profilePic: '/path/to/profile-pic.jpg'
    };

    setUser(loggedInUser);  // Pass the user data to the App component
    navigate('/profile');  // Redirect to profile page after login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
