import React from "react";
import { Link } from "react-router-dom";

import "./UserSettingsSidebar.css";

// dumb component
function UserSettingsSidebar() {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <h3>Settings</h3>
          <ul>
            <Link to="/UserSettings">
              <li className="sidebar-list-item">
                <p>User settings</p>
              </li>
            </Link>
            <Link to="/MyPosts">
              <li className="sidebar-list-item">
                <p>My Posts</p>
              </li>
            </Link>
            <Link to="/ChangePassword">
              <li className="sidebar-list-item">
                <p>Change Password</p>
              </li>
            </Link>
          </ul>
        </li>
        <li>
          <div className="about-us">
            <h3>Learn more</h3>
            <ul>
              <Link to="/AboutUs">
                <li className="sidebar-list-item">
                  <p>About us</p>
                </li>
              </Link>
              <Link to="/PrivacyAndSafety">
                <li className="sidebar-list-item">
                  <p>Privacy & Safety</p>
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
