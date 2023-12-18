import React from "react";
import { Link } from "react-router-dom";

import "./UserSettingsSidebar.css";

const UserSettingsSidebar = () => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <div id="userSetting">
            <h3>Settings</h3>
            <ul>
              <Link to="/UserSettings">
                <li>
                  <a>User settings</a>
                </li>
              </Link>
              <Link to="/MyPosts">
                <li>
                  <a>My Posts</a>
                </li>
              </Link>
              <Link to="/ChangePassword">
                <li>
                  <a>Change Password</a>
                </li>
              </Link>
            </ul>
          </div>
        </li>
        <li>
          <div className="about-us">
            <h3>Learn more</h3>
            <ul>
              <Link to="/AboutUs">
                <li>
                  <a>About us</a>
                </li>
              </Link>
              <Link to="/PrivacyAndSafety">
                <li>
                  <a>Privacy & Safety</a>
                </li>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default UserSettingsSidebar;
