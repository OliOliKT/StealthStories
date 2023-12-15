import React from 'react';

import './TwoFactorAuthentication.css';

const TwoFactorAuthentication = () => {
  return (
    <div className="two-factor-authentication NotImplemented">
      <h2>Two-Factor Authentication</h2>
      <div className="sub-category">
        <div className="lock-symbol">
          <i className="fas fa-lock"></i>
        </div>
        <p className="two-factor-status">Two-factor authentication is enabled</p>
        <p>
          <strong>Two-factor authentication</strong> is a security process that requires users to provide two different authentication factors to access an account or system.
        </p>
      </div>
      <div className="two-factor-buttons">
        <button className="see-backup-codes">See backup codes</button>
        <button className="remove-2fa">Remove 2FA</button>
      </div>
    </div>
  );
};

export default TwoFactorAuthentication;
