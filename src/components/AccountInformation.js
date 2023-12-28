import React, { useState } from "react";
import Parse from "parse";
import "./AccountInformation.css";

// This class is for the Account Information component
// It has the current user, given by parse, and then is has two use states
// It also have the two event handlers
function AccountInformation() {
  const currentUser = Parse.User.current();
  // The useState hook is used to create two pieces of state.
  // These are initialized to false, meaning the user ID and email are not visible by default.
  const [isUserIdVisible, setUserIdVisibility] = useState(false);
  const [isEmailVisible, setEmailVisibility] = useState(false);

  // Event Handler for toggling visibility
  // If the user ID is not visible, then it sets the user ID to be visible.
  const handleUserIdVisibility = () => {
    setUserIdVisibility(!isUserIdVisible);
  };

  // If the mail is not visible, then it sets the mail to be visible
  const handleEmailVisibility = () => {
    setEmailVisibility(!isEmailVisible);
  };

  // The function returns all of this.
  return (
    <div className="account-information">
      <h2>Account Information</h2>
      <div className="info-item">
        <p>
          <strong>User ID</strong>
        </p>
        {/*By using a ternary operator and the useState (starts as false), we can hide and show the id
       It goes: if the iser is visible, show the current user id
       if now, show the stars. */}
        <p>
          {isUserIdVisible ? (
            <span>{currentUser.id}</span>
          ) : (
            <span>*************</span>
          )}
          {/* Then on the toggle button, we use the eventHandler.
          onClick is an event listener that listens for click events. 
          Inside the button is a ternary operator, whcih switches between the text:
          Hide or Show, when button is pressed on. 
          So, if the user is visible, display the text "hide" if not, display the text "show" */}
          <button className="show-information" onClick={handleUserIdVisibility}>
            {isUserIdVisible ? "Hide" : "Show"}
            {/* So: when the user clicks the button that calls handleUserIdVisibility
            it toggles between the values of isUserIdVisible between "true" and "false
            - When isUserIdVisible changes the component re-renders because of the reactivity of React" */}
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
            {isEmailVisible ? "Hide" : "Show"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AccountInformation;
