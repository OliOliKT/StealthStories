import React from "react";

import "./TrendingBlock.css";

// dumb component, not implemented. Just hardcoded
function TrendingBlock() {
  return (
    <div className="trending-block not-implemented">
      <h1 id="trending-title">Trending in Denmark</h1>
      <p className="trending-text">1 #Woopsie</p>
      <p className="post-amount-trending">2.984 posts</p>
      <p className="trending-text">2 #NotReallySorry</p>
      <p className="post-amount-trending">2.356 posts</p>
      <p className="trending-text">3 #YouCantStopMe</p>
      <p className="post-amount-trending">1.384 posts</p>
      <p className="trending-text">4 #TheRealMe</p>
      <p className="post-amount-trending">1.938 posts</p>
      <p className="trending-text">5 #CoolStoryBro</p>
      <p className="post-amount-trending">1.235 posts</p>
      <p className="trending-text">6 #Damn</p>
      <p className="post-amount-trending">765 posts</p>
      <p className="trending-text">7 #Sleepy</p>
      <p className="post-amount-trending">673 posts</p>
    </div>
  );
}

export default TrendingBlock;
