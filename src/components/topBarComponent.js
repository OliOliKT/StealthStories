import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./topBarComponent.css";
import Parse from "parse";

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
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} id="logoimg" alt="Logo" /> {/* made to absolute path */}
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
                  <li>
                    <Link to="/UserSettings">User Settings</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/MyPosts">My Posts</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <button className="log-out-btn" onClick={handleLogout}>
                      Log out
                    </button>
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
