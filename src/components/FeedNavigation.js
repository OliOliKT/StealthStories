import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./FeedNavigation.css";

// FeedNavigation is responsible for toggeling between Discover and Trending Feed
function FeedNavigation() {
  // it has the useState, which default setting is the Discover Feed
  const [activeLink, setActiveLink] = useState("discover");

  // creates useLocation hook which represents the current URL - can be used to access pathname
  const location = useLocation();

  // useEffect hook which is responsible to set the active link to either trending or
  // we have useEffect as it is necessary for handling state change
  React.useEffect(() => {
    if (location.pathname === "/DiscoverFeed") {
      setActiveLink("discover");
    } else if (location.pathname === "/TrendingFeed") {
      setActiveLink("trending");
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  return (
    <div className="feed-nav">
      <Link to="/DiscoverFeed" className="nav-link">
        <div
          id="discover-feed-nav"
          className={
            activeLink === "discover" ? "active-link" : "inactive-link"
          }
        >
          <div className="icon-and-text">
            <i className="fa-regular fa-compass"></i>
            <p class="nav-text-discover">Discover</p>
          </div>
        </div>
      </Link>

      <Link to="/TrendingFeed" className="nav-link">
        <div
          id="trending-feed-nav"
          className={
            activeLink === "trending" ? "active-link" : "inactive-link"
          }
        >
          <div className="icon-and-text">
            <i className="fa-solid fa-fire-flame-curved"></i>
            <p class="nav-text-trending">Trending</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeedNavigation;
