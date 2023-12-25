import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Parse from "parse";
import "./TopBar.css";

const TopBar = () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <TopBarIcons />
    </header>
  );
};

const SearchBar = () => {
  return (
    <div className="header">
      <div id="search-bar">
        <form action="/search" method="get">
          <input type="search" id="search" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/DiscoverFeed">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          id="logo-img"
          alt="Logo"
        />{" "}
      </Link>
    </div>
  );
};

const TopBarIcons = () => {
  const [isDropdownOpen, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = () => {
    setDropdown(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await Parse.User.logOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out", error);
      alert("Failed to log out, please try again.");
    }
  };

  return (
    <ul className="navigation">
      <li>
        <i
          className="fa-solid fa-box-archive nav-icon"
          onClick={() => navigate("/MyPosts")}
        ></i>
      </li>
      <li>
        <i className="fa-solid fa-bell nav-icon"></i>
      </li>
      <li className="user-icon nav-icon" onClick={handleDropdown}>
        <i className="fas fa-user nav-icon"></i>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul onClick={() => navigate("/UserSettings")}>
              <li>
                <i class="fa-solid fa-gear dropdown-icon"></i>
                <p className="dropdown-text"> User settings</p>
              </li>
            </ul>
            <ul onClick={() => navigate("/MyPosts")}>
              <li>
                <i class="fa-solid fa-box-archive dropdown-icon"></i>
                <p className="dropdown-text"> My posts </p>
              </li>
            </ul>
            <ul onClick={handleLogout}>
              <li>
                <i class="fa-solid fa-arrow-right-from-bracket dropdown-icon"></i>
                <p className="dropdown-text"> Log out</p>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
};

export default TopBar;
