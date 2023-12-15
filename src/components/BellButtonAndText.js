import React from "react";

import "./ButtonAndText.css";

function BellButtonAndText({ onFollow, isFollowed }) {
  const iconClass = isFollowed ? "fa-solid fa-bell sipped" : "fa-solid fa-bell";

  return (
    <div className="iconAndText" onClick={onFollow}>
      <i className={iconClass}></i>
      <p className="iconText">Follow</p>
    </div>
  );
}

export default BellButtonAndText;
