import React, { useState } from "react";

import "./Comment.css";
import LikeButtonAndText from "./LikeButtonAndText";

function Comment({ postedBy, commentContent, daysAgo, ellipsesOnClick, handleSip, sipCount, isSipped }) {
  
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
         <LikeButtonAndText className={"iconAndText"} isSipped={isSipped} sipCount={sipCount} onSip={handleSip}/>
          <i className="comment-icon fa-solid fa-ellipsis" onClick={ellipsesOnClick}></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;
