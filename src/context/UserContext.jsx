/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Manage login/signup toggle
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');

  const handleGoogleLogin = () => {
    // Initialize Google Sign-In
    window.gapi.auth2.getAuthInstance().signIn().then(googleUser => {
      const profile = googleUser.getBasicProfile();
      const user = {
        name: profile.getName(),
        email: profile.getEmail(),
        profilePic: profile.getImageUrl()
      };
      setUser(user);  // Pass the user data to the App component
      navigate('/profile');  // Redirect to profile page
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate a login by creating a user object
      const user = {
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
      setUser(user);  // Pass the user data to the App component
      navigate('/profile');  // Redirect to profile page after login
    } else {
      // Simulate a signup by creating a user object
      const user = {
        name: username,
        email: email,
        mobile: mobile,
        otp: otp,  // Normally you'd verify OTP with a backend
        address: '123 Main St, New York, NY',
        orders: [],
        profilePic: '/path/to/profile-pic.jpg'
      };
      setUser(user);  // Pass the user data to the App component
      navigate('/profile');  // Redirect to profile page after signup
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <button 
          className="toggle-btn" 
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Create an Account' : 'Back to Login'}
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input 
              type="text" 
              placeholder="Enter username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Enter mobile number" 
              value={mobile} 
              onChange={(e) => setMobile(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Enter OTP" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              required 
            />
          </>
        )}
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
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Login;