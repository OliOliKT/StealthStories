import React from "react";
import { Link } from "react-router-dom";

import "./ButtonAndText.css";

function CommentButtonAndText({ commentCount, onComment }) {
  return (
    <div className="iconAndText" onClick={onComment}>
      <Link to="#" className="iconLink" onClick={(e) => e.preventDefault()}>
        <i className="fa-solid fa-comment"></i>
      </Link>
      <p className="iconText">{commentCount}</p>
    </div>
  );
}

export default CommentButtonAndText;
