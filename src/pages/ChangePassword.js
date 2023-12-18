import React, { useState } from "react";
import Parse from "parse";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import TopBar from "../components/topBarComponent";
import "./ChangePassword.css";
import "../components/FormInput.css";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("The new passwords do not match.");
      return;
    }

    const currentUser = Parse.User.current();

    if (currentUser) {
      try {
        await Parse.User.logIn(currentUser.get("username"), oldPassword);
        currentUser.setPassword(newPassword);
        await currentUser.save();
        await Parse.User.logOut();
        alert(
          "Password changed successfully. Please log in with your new password."
        );
        navigate("/");

        setError("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        setError("Invalid password");
      }
    } else {
      setError("No user is currently logged in.");
    }
  };

  return (
    <>
      <TopBar />
      <div className="change-password-grid">
        <h1 className="change-password-title"> Change password </h1>
        <UserSettingsSidebar className="sidebar-content" />
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
                <div className="log-in-btn">
                  <button type="submit" className="sign-in change-password-btn">
                    Change Password
                  </button>
                </div>
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
