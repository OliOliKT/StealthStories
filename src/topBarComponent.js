import React from "react";
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
      <img src="images/logo.png" id="logoimg" />
    </div>
  );
};

const TopBarIcons = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-box-archive"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bell"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
