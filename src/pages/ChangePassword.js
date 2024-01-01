import React, { useState } from "react";
import Parse from "parse";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import TopBar from "../components/TopBar";
import "./ChangePassword.css";
import "./LogIn.css";

function ChangePassword() {
  // State variables to store user inputs and error messages.
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Event Handler to handle the password change process.
  const handleChangePassword = async (e) => {
    // preventDefault so the page doesn't load when we press "change password", so we can navigate to Login page
    e.preventDefault();

    // Check if the new password and confirm password match, if not sets error
    if (newPassword !== confirmPassword) {
      setError("The new passwords do not match.");
      return;
    }

    // Get the current logged-in user.
    const currentUser = Parse.User.current();

    // if user exist
    if (currentUser) {
      try {
        // First, log in the user with the old password for verification.
        await Parse.User.logIn(currentUser.get("username"), oldPassword);

        // Set the new password and save the user data.
        currentUser.setPassword(newPassword);
        await currentUser.save();

        // Log the user out and navigate to the login screen.
        await Parse.User.logOut();
        alert(
          "Password changed successfully. Please log in with your new password."
        );
        navigate("/");

        // Reset states to clear the form fields.
        setError("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        // Set error if the old password is wrong or another error occurs.
        setError("Invalid password");
      }
    } else {
      // Error if no user is logged in.
      setError("No user is currently logged in.");
    }
  };

  return (
    <>
      <TopBar />
      <div className="change-password-grid">
        <h1 className="change-password-title"> Change password </h1>
        <UserSettingsSidebar
          className="sidebar-content"
          activePage="ChangePassword"
        />
        <div className="change-password-main-content">
          <div className="login-component">
            <div className="login-box">
              <form onSubmit={handleChangePassword} className="input-container">
                <div className="password">
                  <p>Old Password</p>
                  <input
                    type="password"
                    className="login-mail-and-password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <div className="password">
                  <p>New Password</p>
                  <input
                    type="password"
                    className="login-mail-and-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="password">
                  <p>Confirm New Password</p>
                  <input
                    type="password"
                    className="login-mail-and-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <span className="error-message">{error}</span>
                <button type="submit" className="log-in-btn password-submit">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChangePassword;
