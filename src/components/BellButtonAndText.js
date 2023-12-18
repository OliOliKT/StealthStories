import React from "react";
import "./ButtonAndText.css";
import ToolTip from './ToolTip';

function BellButtonAndText({ handleFollow, isFollowed }) {
  const iconClass = isFollowed ? "fa-solid fa-bell followed" : "fa-solid fa-bell";

  return (
    <ToolTip text="Notification feature has not been implemented yet!" >
    <div className="icon-and-text" onClick={handleFollow}>
      <i className={iconClass}></i>
      <p className="icon-text">Follow</p>
    </div>
    </ToolTip>
  );
}

export default BellButtonAndText;
