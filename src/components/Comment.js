import React from "react";
import "./Comment.css";

function Comment({ postedBy, commentContent, sipCount, daysAgo }) {
 
  return (
    <div class="comment-container">
      <div class="user-icon-comment">
        {" "}
        <i class="fas fa-circle-user"></i>
      </div>
      <div class="content-part-of-comment">
        <div class="background-comment">
          <div class="comment-user-info">
            <p class="comment-user-text"> { postedBy } </p>
            <p class="comment-user-text"> • </p>
            <p class="comment-user-text"> { daysAgo } days ago </p>
          </div>
          <div class="comment-content">
            { commentContent }
          </div>
        </div>
        <div class="actions-on-comment">
          <i class="comment-icon fa-solid fa-mug-hot"></i>
          <p class="sip-count-comment"> { sipCount } </p>
          <i class="comment-icon fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;
