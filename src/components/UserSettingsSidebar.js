// UserSettingsSidebar.jsx

import React from 'react';
import './UserSettingsSidebar.css';

const UserSettingsSidebar = () => {
  return (
    <nav className="sidebar-nav">
        <ul>
            <li>
                <div id="userSetting">
                    <h3>USER SETTINGS</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Privacy & Safety</a></li>
                        <li><a href="#">My Aliases</a></li>
                        <li><a href="#">My Posts</a></li>
                        <li><a href="#">Change Password</a></li>
                    </ul>
                </div>
            </li>
            <br></br><br></br><br></br>
            <li>
                <div id="appSetting">
                    <h3>APP SETTINGS</h3>
                    <ul>
                        <li><a href="#">Appearance</a></li>
                        <li><a href="#">Country and Language</a></li>
                        <li><a href="#">Notifications</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
  );
}

export default UserSettingsSidebar;
