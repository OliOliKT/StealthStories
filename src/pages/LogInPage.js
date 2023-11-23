import React from "react";
import "./LogInPage.css";

import LogInComponent from "../components/LogInComponent";
import FooterLogin from "../components/footer";

function LoggingIn() {
  return (
    <div className="login-grid-container">
      <LogInComponent />
      <FooterLogin className="FooterLogin" />
    </div>
  );
}

export default LoggingIn;
