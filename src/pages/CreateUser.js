import "./CreateUser.css";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Parse from "parse";

function CreateUser() {
  // useStates so we can update the state of the variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // if the passwords and confirm password doesn't match it throws an error
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("The passwords doesn't match, try again! :)");
      return;
    }

    // we create a new user in the backend with the username picked by the user, the mail and the password
    const user = new Parse.User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);

    try {
      await user.signUp();
      navigate("/");
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="creating-user-grid-container">
        <div className="create-user-component">
          <div className="logo-container">
            <img src="images/logo.png" alt="logo" className="logo" />
          </div>
          <div className="create-user-box">
            <div className="creater-user-box">
              <div className="input-container">
                <div className="username">
                  <p>Username</p>
                  <input
                    type="username"
                    className="input-username-and-mail-and-password"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mail">
                  <p>E-mail</p>
                  <input
                    type="email"
                    className="input-username-and-mail-and-password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <p>Password</p>
                  <input
                    type="password"
                    className="input-username-and-mail-and-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="verify-password">
                  <p>Confirm Password</p>
                  <input
                    type="password"
                    className="input-username-and-mail-and-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <span className="error-message">{error}</span>
              </div>
              <div className="create-user">
                <button className="create-user-btn" onClick={handleSignup}>
                  Create User
                </button>
              </div>
            </div>
            <Link to="/">
              <button className="back-to-login-page">
                Take me back to the login page
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateUser;
