import React from "react";

import "./CreateUser.css";

import CreateUserComponent from "../components/CreateUserComponent";
import Footer from "../components/footer";

function CreatingUser() {
  return (
    <>
    <div className="creating-user-grid-container">
      <CreateUserComponent />
      
    </div>
    <Footer />
    </>
  );
}

export default CreatingUser;
