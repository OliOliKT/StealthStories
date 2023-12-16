import React from "react";

import "./ButtonAndText.css";
import ToolTip from './ToolTip';

function BellButtonAndText({ onFollow, isFollowed }) {
  const iconClass = isFollowed ? "fa-solid fa-bell followed" : "fa-solid fa-bell";

  return (
    <ToolTip text="Notification feature has not been implemented yet!" >
    <div className="iconAndText" onClick={onFollow}>
      <i className={iconClass}></i>
      <p className="iconText">Follow</p>
    </div>
    </ToolTip>
  );
}

export default BellButtonAndText;
