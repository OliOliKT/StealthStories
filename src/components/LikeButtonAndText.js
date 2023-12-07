// LikeButtonAndText.js
import React from 'react';
import './ButtonAndText.css';

function LikeButtonAndText({ sipCount, onSip, isSipped }) {
  
  const iconClass = isSipped ? "fa-solid fa-mug-hot liked" : "fa-solid fa-mug-hot";

  return (
    <div className="iconAndText" onClick={onSip}>
      <i className={iconClass}></i>
      <p className="iconText">{sipCount}</p>
    </div>
  );
}

export default LikeButtonAndText;
