import React from 'react';
import "./DiscoverFeed.css"; // The corresponding CSS file

//Components
import FeedNavigation from '../components/FeedNavigation';
import Feed from '../components/Feed';

function DiscoverFeed() {
  return (
    <div className="main-content">
      <FeedNavigation />
      <Feed/>
    </div>
  );
}

export default DiscoverFeed;