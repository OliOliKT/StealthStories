import React from 'react';
import './DeleteAccount.css';

const DeleteAccount = () => {
  return (
    <div className="delete-account">
      <h2>Delete account</h2>
      <div className="sub-category">
        <p>If you delete your account you can never retrieve any information from it again.</p>
      </div>
      <div className="two-factor-buttons">
        <button className="delete-account-button">Delete account</button>
      </div>
    </div>
  );
};

export default DeleteAccount;
