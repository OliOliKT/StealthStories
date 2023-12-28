import React from "react";
import "./Comment.css";
import LikeButtonAndText from "./LikeButtonAndText";

// This function takes in several parameters.
function Comment({
  postedBy,
  commentContent,
  daysAgo,
  handleSip,
  sipCount,
  isSipped,
}) {
  // It returns all this
  return (
    // The comment container is the box containg everything within the comments
    <div className="comment-container">
      <div className="user-icon-comment">
        <i className="fas fa-circle-user comment"></i>
      </div>
      <div className="content-part-of-comment">
        <div className="background-comment">
          <div className="comment-user-info">
            <p className="comment-user-text"> {postedBy} </p>
            <p className="comment-user-text"> • </p>
            <p className="comment-user-text"> {daysAgo} days ago </p>
          </div>
          <div className="comment-content">{commentContent}</div>
        </div>
        <div className="actions-on-comment">
          <LikeButtonAndText
            className={"icon-and-text"}
            isSipped={isSipped}
            sipCount={sipCount}
            onSip={handleSip}
          />
          <i className="comment-icon fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;
