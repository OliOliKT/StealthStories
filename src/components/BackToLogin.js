import React from "react";
import "./BackToLogin.css";
import { Link } from "react-router-dom";

const BackToLoginButton = () => {
  return (
    <Link to="/">
      <button className="back-to-login-page">
        Take me back to the login page
      </button>
    </Link>
  );
};

export default BackToLoginButton;
