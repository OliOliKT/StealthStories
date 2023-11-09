import React from "react";
import "./FeedNavigation.css";

function FeedNavigation() {
  return (
    <div className="feedNav">
      <div id="discoverFeedNav">
        <div className="iconAndText">
          <a href="#" className="iconLinkDiscoverNav">
            <i className="fa-regular fa-compass"></i>
          </a>
          <p className="navTextDiscover">Discover</p>
        </div>
      </div>
      <div id="trendingFeedNav">
        <div className="iconAndText">
          <a href="#" className="iconLinkTrendingNav">
            <i className="fa-solid fa-fire-flame-curved"></i>
          </a>
          <p className="navTextTrending">Trending</p>
        </div>
      </div>
    </div>
  );
}

export default FeedNavigation;
