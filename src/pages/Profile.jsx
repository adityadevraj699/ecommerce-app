/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Profile.css';

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); 
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobile, setMobile] = useState(user?.mobile || '');
  const [address, setAddress] = useState(user?.address || '');
  const [profilePic, setProfilePic] = useState(user?.profilePic || '');

  const handleLogout = () => {
    navigate('/login');
    setUser(null);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    const updatedUser = {
      ...user,
      name,
      email,
      mobile,
      address,
      profilePic, 
    };
    setUser(updatedUser);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePicClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-pic-container" onClick={handleProfilePicClick}>
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic" />
          ) : (
            <FaUserCircle size={100} />
          )}
        </div>
        <h2 className='user-name'>{name}</h2>
      </div>

      <div className="profile-details">
        {editing ? (
          <div className="profile-edit-form">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef} 
              onChange={handleFileChange}
              style={{ display: 'none' }} 
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <>
            <p><strong className='user-detail-fill'>Email:</strong> {email}</p>
            <p><strong className='user-detail-fill'>Mobile:</strong> {mobile}</p>
            <p><strong className='user-detail-fill'>Address:</strong> {address}</p>
            {user.orders && user.orders.length > 0 && (
              <div className="order-history">
                <h4>Order History</h4>
                {user.orders.map(order => (
                  <div key={order.id}>
                    <p><strong className='user-detail-fill'>Item:</strong> {order.item}</p>
                    <p><strong className='user-detail-fill'>Date:</strong> {order.date}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <div className="profile-buttons">
          {!editing && <button onClick={handleEdit}>Edit Profile</button>}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
