import React from 'react';

import './ButtonAndText.css';

function LikeButtonAndText({ sipCount, onSip, isSipped, className }) {
  
  const iconClass = isSipped ? "fa-solid fa-mug-hot liked" : "fa-solid fa-mug-hot";

  return (
    <div className={className} onClick={onSip}>
      <i className={iconClass}></i>
      <p className="icon-text">{sipCount}</p>
    </div>
  );
}

export default LikeButtonAndText;
