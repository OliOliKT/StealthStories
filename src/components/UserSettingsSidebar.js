import React from "react";
import "./UserSettingsSidebar.css";
import { Link } from "react-router-dom";

const UserSettingsSidebar = () => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <div id="userSetting">
            <h3>User settings</h3>
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
              <Link to="/Notifications">
                <li>
                  <a>Notifications</a>
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
            <h3>Learn more about StealthStories</h3>
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
