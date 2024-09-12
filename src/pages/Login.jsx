/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); 
  const [isForgotPassword, setIsForgotPassword] = useState(false); 
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [otpSubmitted, setOtpSubmitted] = useState(false); 
  const [otpVerified, setOtpVerified] = useState(false); 

  const handleGoogleLogin = () => {
    // Google login logic here
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isForgotPassword) {
      if (!otpVerified) {
        alert('Please enter a valid OTP first.');
        return;
      }

      if (newPassword !== confirmPassword) {
        setPasswordsMatch(false);
        return;
      }

      if (!newPassword || !validatePassword(newPassword)) {
        alert('Please enter a valid new password.');
        return;
      }

      alert('Password has been successfully changed.');
      setIsForgotPassword(false);
      setIsLogin(true);
    } else if (isLogin) {
      if (!validatePassword(password)) {
        alert('Password must meet requirements.');
        return;
      }

      const user = {
        name: '',
        email: email,
        mobile: '',
        address: '',
        orders: [
          { id: 1, item: 'Laptop', date: '2024-09-01' },
          { id: 2, item: 'Headphones', date: '2024-09-05' }
        ],
        profilePic: '/public/images/user.png'
      };
      setUser(user);
      navigate('/profile', { state: { user } });
    } else {
      // Signup flow
      if (!email || !password || !username || !mobile) {
        alert('Please fill all required fields.');
        return;
      }

      if (!validatePassword(password)) {
        alert('Password must meet requirements.');
        return;
      }

      const newUser = {
        name: username,
        email: email,
        mobile: mobile,
        profilePic: '/public/images/user.png'
      };
      setUser(newUser);
      alert('Signup successful! You can now log in.');
      navigate('/profile', { state: { user: newUser } });
      setIsLogin(true);
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    alert('OTP sent to your email/mobile.');
    setOtpSubmitted(true);
  };

  const handleOtpVerification = () => {
    if (otp === '123456') {
      alert('OTP verified successfully.');
      setOtpVerified(true);
    } else {
      alert('Invalid OTP. Please try again.');
      setOtpVerified(false);
    }
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === newPassword);
  };

  return (
    <div className="login-container">
      {isForgotPassword ? (
        <div className="forgot-password">
          <h2>Forgot Password</h2>
          {!otpVerified ? (
            <>
              <form onSubmit={handleForgotPasswordSubmit}>
                <input
                  type="text"
                  placeholder="Enter email or mobile number"
                  value={email || mobile}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMobile(e.target.value);
                  }}
                  required
                />
                <button className='send-otp-btn' type="submit">Send OTP</button>
              </form>
              {otpSubmitted && (
                <div>
                  <input
                    type="text"
                    className='enter-otp'
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                  <button className='verify-otp-btn' type="button" onClick={handleOtpVerification}>Verify OTP</button>
                </div>
              )}
            </>
          ) : (
            <>
              <h2>Set New Password</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="password"
                  className='set-password-input'
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  required
                />
                <input
                  type="password"
                  className='set-password-input'
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  style={{ borderColor: passwordsMatch ? '' : 'red' }}
                  required
                />
                {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>}
                {passwordsMatch && <button type="submit">Reset Password</button>}
              </form>
            </>
          )}
        </div>
      ) : (
        <div>
          <div className="login-header">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Create an Account' : 'Back to Login'}
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  className='user-detail-input'
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  className='user-detail-input'
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </>
            )}
            <input
              type="email"
              className='user-detail-input'
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className='user-detail-input'
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className='login-signup-btn' type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          {isLogin && (
            <button className="forgot-password-btn" onClick={() => setIsForgotPassword(true)}>
              Forgot Password?
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
