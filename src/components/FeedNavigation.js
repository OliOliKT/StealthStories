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
      <Link to="/DiscoverFeed" className={activeLink === "/DiscoverFeed" ? "activeLink" : "navLink"}>
        <div id="discoverFeedNav subdiv">
          <div className="iconAndText subdiv">
            <i className="fa-regular fa-compass subdiv"></i>
            <p className="navTextDiscover subdiv">Discover</p>
          </div>
        </div>
      </Link>

      <Link to="/TrendingFeed" className={activeLink === "/TrendingFeed" ? "activeLink" : "navLink"}>
        <div id="trendingFeedNav subdiv">
          <div className="iconAndText subdiv">
            <i className="fa-solid fa-fire-flame-curved subdiv"></i>
            <p className="navTextTrending subdiv">Trending</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeedNavigation;
