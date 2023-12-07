import React from "react";

import "./Comment.css";

function Comment({ postedBy, commentContent, sipCount, daysAgo }) {
 
  return (
    <div className="comment-container">
      <div className="user-icon-comment">
        <i className="fas fa-circle-user comment"></i>
      </div>
      <div className="content-part-of-comment">
        <div className="background-comment">
          <div className="comment-user-info">
            <p className="comment-user-text"> { postedBy } </p>
            <p className="comment-user-text"> • </p>
            <p className="comment-user-text"> { daysAgo } days ago </p>
          </div>
          <div className="comment-content">
            { commentContent }
          </div>
        </div>
        <div className="actions-on-comment">
          <i className="comment-icon fa-solid fa-mug-hot"></i>
          <p className="sip-count-comment"> { sipCount } </p>
          <i className="comment-icon fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;
