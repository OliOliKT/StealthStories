import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./FeedNavigation.css";

function FeedNavigation() {
  const [activeLink, setActiveLink] = useState("discover");

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/DiscoverFeed") {
      setActiveLink("discover");
    } else if (location.pathname === "/TrendingFeed") {
      setActiveLink("trending");
    } else {
      setActiveLink(""); // Default or fallback state
    }
  }, [location.pathname]);

  return (
    <div className="feedNav">
      <Link to="/DiscoverFeed" className="navLink">
        <div id="discoverFeedNav" className={activeLink === "discover" ? "activeLink" : "inactiveLink"}>
          <div className="iconAndText">
            <i className="fa-regular fa-compass"></i>
            <p class="navTextDiscover">Discover</p>
          </div>
        </div>
      </Link>

      <Link to="/TrendingFeed" className="navLink">
        <div id="trendingFeedNav" className={activeLink === "trending" ? "activeLink" : "inactiveLink"}>
          <div className="iconAndText">
            <i className="fa-solid fa-fire-flame-curved"></i>
            <p class="navTextTrending">Trending</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeedNavigation;
