import React, { useState } from "react";
import Parse from "parse";
import "./AccountInformation.css";

function AccountInformation() {
  const currentUser = Parse.User.current();
  const [isUserIdVisible, setUserIdVisibility] = useState(false);
  const [isEmailVisible, setEmailVisibility] = useState(false);

  const handleUserIdVisibility = () => {
    setUserIdVisibility(!isUserIdVisible);
  };

  const handleEmailVisibility = () => {
    setEmailVisibility(!isEmailVisible);
  };

  return (
    <div className="account-information">
      <h2>Account Information</h2>
      <div className="info-item">
        <p>
          <strong>User ID</strong>
        </p>
        <p>
          {isUserIdVisible ? (
            <span>{currentUser.id}</span>
          ) : (
            <span>*************</span>
          )}
          <button className="show-information" onClick={handleUserIdVisibility}>
            {isUserIdVisible ? "Hide" : "Show"}
          </button>
        </p>
      </div>
      <div className="info-item">
        <p>
          <strong>E-mail</strong>
        </p>
        <p>
          {isEmailVisible ? (
            <span>{currentUser.getEmail()}</span>
          ) : (
            <span>*************</span>
          )}
          <button className="show-information" onClick={handleEmailVisibility}>
            {isEmailVisible ? "Hide" : "Show"}{" "}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AccountInformation;
