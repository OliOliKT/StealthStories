import React from "react";
import "./LogInPage.css";

import LogInComponent from "../components/LogInComponent";
import Footer from "../components/footer";

function LoggingIn() {
  return (
    <>
    <div className="login-grid-container">
      <LogInComponent />
      
    </div>
    <Footer />
    </>
  );
}

export default LoggingIn;
