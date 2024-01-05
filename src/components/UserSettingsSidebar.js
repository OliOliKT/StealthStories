import React from "react";
import { Link } from "react-router-dom";
import "./UserSettingsSidebar.css";

function UserSettingsSidebar({ activePage }) {
  const isActive = (page) => activePage === page;

  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <h3>Settings</h3>
          <ul>
            <Link to="/UserSettings">
              <li
                className={`sidebar-list-item ${
                  isActive("UserSettings") ? "active" : ""
                }`}
              >
                <p>User settings</p>
              </li>
            </Link>
            <Link to="/MyPosts">
              <li
                className={`sidebar-list-item ${
                  isActive("MyPosts") ? "active" : ""
                }`}
              >
                <p>My stories</p>
              </li>
            </Link>
            <Link to="/ChangePassword">
              <li
                className={`sidebar-list-item ${
                  isActive("ChangePassword") ? "active" : ""
                }`}
              >
                <p>Change password</p>
              </li>
            </Link>
          </ul>
        </li>
        <li>
          <div className="about-us">
            <h3>Learn more</h3>
            <ul>
              <Link to="/AboutUs">
                <li
                  className={`sidebar-list-item ${
                    isActive("AboutUs") ? "active" : ""
                  }`}
                >
                  <p>About us</p>
                </li>
              </Link>
              <Link to="/ContactUs">
                <li
                  className={`sidebar-list-item ${
                    isActive("ContactUs") ? "active" : ""
                  }`}
                >
                  <p>Contact us</p>
                </li>
              </Link>
              <Link to="/PrivacyAndSafety">
                <li
                  className={`sidebar-list-item ${
                    isActive("PrivacyAndSafety") ? "active" : ""
                  }`}
                >
                  <p>Privacy & safety</p>
                </li>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default UserSettingsSidebar;
