import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Parse from "parse";
import Footer from "../components/Footer";
import "./LogIn.css";

function LogIn() {
  // useSate to update the sate of the given variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); // a bit uncessary here
    try {
      // LogIn is a function from Parse to log in users
      const user = await Parse.User.logIn(email, password);
      console.log("Success! User ID:", user.id);
      navigate("/DiscoverFeed");
    } catch (error) {
      console.error("Error while logging in user", error);
      setError("Wrong email or password!");
    }
  };

  return (
    <>
      <div className="login-grid-container">
        <div className="login-component">
          <div className="logo-container">
            <img src="images/logo.png" alt="logo" className="logo" />
          </div>
          <div className="login-box">
            <div className="input-container">
              <div className="mail">
                <p>E-mail</p>
                <input
                  type="email"
                  className="login-mail-and-password"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password">
                <p>Password</p>
                <input
                  type="password"
                  className="login-mail-and-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span className="error-message">{error}</span>
            </div>
            <button className="log-in-btn" onClick={handleLogin}>
              Log in
            </button>
            <div className="no-account">
              <p>No account? No worries!</p>
              <p>
                <Link to="/CreateUser" className="create-account">
                  Create one here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LogIn;
