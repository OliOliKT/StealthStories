import React from "react";
import { Link } from "react-router-dom";

import "./ButtonAndText.css";

function CommentButtonAndText({ commentCount, onComment }) {
  return (
    <div className="iconAndText" onClick={onComment}>
      <i className="fa-solid fa-comment"></i>
      <p className="iconText">{commentCount}</p>
    </div>
  );
}

export default CommentButtonAndText;
