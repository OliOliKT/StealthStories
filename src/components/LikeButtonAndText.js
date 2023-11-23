// LikeButtonAndText.js
import React from 'react';
import './ButtonAndText.css'; // Make sure this is the correct path

function LikeButtonAndText({ likeCount, onLike, isLiked }) {
  // tenary operator to determine if isLiked is true or false
  const iconClass = isLiked ? "fa-solid fa-mug-hot liked" : "fa-solid fa-mug-hot";

  return (
    <div className="iconAndText" onClick={onLike}>
      <i className={iconClass}></i>
      <p className="iconText">{likeCount}</p>
    </div>
  );
}

export default LikeButtonAndText;
