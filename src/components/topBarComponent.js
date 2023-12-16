import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Parse from "parse";

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
      <Link to="/DiscoverFeed">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          id="logoimg"
          alt="Logo"
        />{" "}
      </Link>
    </div>
  );
};


const TopBarIcons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
    <div className="navigation">
      <nav>
        <ul>
          <li>
              <i className="fa-solid fa-box-archive nav-icon" onClick={() => navigate("/UserSettings")}></i>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bell nav-icon"></i>
            </a>
          </li>
          <li className="user-icon nav-icon" onClick={toggleDropdown}>
            <a href="#">
              <i className="fas fa-user nav-icon"></i>
            </a>
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
      </nav>
    </div>
  );
};

export default TopBar;
