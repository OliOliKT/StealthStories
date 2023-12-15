import React from "react";

import LogInComponent from "../components/LogInComponent";
import Footer from "../components/footer";
import "./LogInPage.css";

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
