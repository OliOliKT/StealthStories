import React from "react";
import "./ButtonAndText.css";

function CommentButtonAndText({ commentCount, handleComment }) {
  return (
    <div className="icon-and-text" onClick={handleComment}>
      <i className="fa-solid fa-comment"></i>
      <p className="icon-text">{commentCount}</p>
    </div>
  );
}

export default CommentButtonAndText;