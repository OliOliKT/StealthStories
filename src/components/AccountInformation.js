import React, { useState } from "react";
import Parse from "parse";

import "./AccountInformation.css";


const AccountInformation = () => {
  const currentUser = Parse.User.current();
  const [showUserId, setShowUserId] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const toggleUserId = () => {
    setShowUserId(!showUserId);
  };

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="account-information">
      <h2>Account Information</h2>
      <div className="info-item">
        <p>
          <strong>User ID</strong>
        </p>
        <p>
          {showUserId ? (
            <span>{currentUser.id}</span>
          ) : (
            <span>*************</span>
          )}
          <button className="show" onClick={toggleUserId}>
            {showUserId ? "Hide" : "Show"}
          </button>
        </p>
      </div>
      <div className="info-item">
        <p>
          <strong>E-mail</strong>
        </p>
        <p>
          {showEmail ? (
            <span>{currentUser.getEmail()}</span>
          ) : (
            <span>*************</span>
          )}
          <button className="show" onClick={toggleEmail}>
            {showEmail ? "Hide" : "Show"}{" "}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AccountInformation;
