import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./FeedNavigation.css";

function FeedNavigation() {
  const [activeLink, setActiveLink] = useState("discover");

  const location = useLocation();

  // Determine the active link based on the current location
  React.useEffect(() => {
    if (location.pathname === "/trending") {
      setActiveLink("trending");
    } else {
      setActiveLink("discover");
    }
  }, [location.pathname]);

  return (
    <div className="feedNav">
      <Link
        to="/DiscoverFeed"
        className={activeLink === "discover" ? "activeLink" : "navLink"}
      >
        <div id="discoverFeedNav">
          <div className="iconAndText">
            <i className="fa-regular fa-compass"></i>
            <p className="navTextDiscover">Discover</p>
          </div>
        </div>
      </Link>

      <Link
        to="/TrendingFeed"
        className={activeLink === "trending" ? "activeLink" : "navLink"}
      >
        <div id="trendingFeedNav">
          <div className="iconAndText">
            <i className="fa-solid fa-fire-flame-curved"></i>
            <p className="navTextTrending">Trending</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeedNavigation;
