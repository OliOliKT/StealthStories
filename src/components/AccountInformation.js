// src/components/AccountInformation.jsx
import React from 'react';
import './AccountInformation.css'; // Make sure to create this CSS file

const AccountInformation = () => {
  return (
    <div className="account-information">
      <h2>Account Information</h2>
      <div className="info-item">
        <p><strong>User ID</strong></p>
        <p>
          <span>******71</span>
          <span className="show">Show</span>
          <button className="edit">Edit</button>
        </p>
      </div>
      <div className="info-item">
        <p><strong>E-mail</strong></p>
        <p>
          <span>********@gmail.com</span>
          <span className="show">Show</span>
          <button className="edit">Edit</button>
        </p>
      </div>
    </div>
  );
};

export default AccountInformation;
