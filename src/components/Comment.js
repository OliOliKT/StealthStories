import React from "react";
import "./Comment.css";

function Comment() {
  return (
    <div class="comment-container">
      <div class="user-icon-comment">
        {" "}
        <i class="fas fa-circle-user"></i>
      </div>
      <div class="content-part-of-comment">
        <div class="background-comment">
          <div class="comment-user-info">
            <p class="comment-user-text"> Username </p>
            <p class="comment-user-text"> • </p>
            <p class="comment-user-text"> 22 hours ago </p>
          </div>
          <div class="comment-content">
            Bro, honestly, it is fine. The kids do not care in the slightest
            about that clock, and they are probably better off having one that
            do not break from falling down! Own it my man!
          </div>
        </div>
        <div class="actions-on-comment">
          <i class="comment-icon fa-solid fa-mug-hot"></i>
          <p class="sip-count-comment"> 45 </p>
          <i class="comment-icon fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;
