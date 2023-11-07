// src/components/UserInfo.jsx
import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
  return (
    <div className="user-info">
      <i className="fas fa-user-circle"></i>
      <div>
        <p className="label">Current Alias</p>
        <p className="alias">DangerousHibiscus</p>
      </div>
    </div>
  );
};

export default UserInfo;
