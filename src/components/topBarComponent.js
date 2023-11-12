import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./topBarComponent.css";

const TopBar = () => {
  return (
    <section className="header">
      <Logo />
      <SearchBar />
      <TopBarIcons />
    </section>
  );
};

const SearchBar = () => {
  return (
    <div className="header">
      <div id="searchBar">
        <form action="/search" method="get">
          <input type="search" id="search" name="q" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="images/logo.png" id="logoimg" alt="Logo" />
      </Link>
    </div>
  );
};

const TopBarIcons = () => {
  // State to manage the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
          <Link to="/MyPosts">
              <i className="fa-solid fa-box-archive"></i>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bell"></i>
            </a>
          </li>
          <li className="user-icon" onClick={toggleDropdown}>
            <a href="#">
              <i className="fas fa-user"></i>
            </a>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><a href="/UserSettings">User Settings</a></li>
                </ul>
                <ul>
                  <li><a href="/MyPosts">My Posts</a></li>
                </ul>
                <ul>
                  <li><a href="/Login">Log out</a></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
