import React from "react";
import "./CommentComponent.css";

const WriteComment = () => {
  return (
    <section className="writeComment">
      <CommentBox />
    </section>
  );
};

const CommentBox = () => {
  return (
    <div>
      <textarea
        id="comments"
        placeholder="Write your comment here..."
        rows="5"
      ></textarea>
      <CommentBorder />
    </div>
  );
};

const CommentBorder = () => {
  return (
    <div className="commentBorder">
      <CommentIcons />
      <SendCommentIcon />
    </div>
  );
};

const CommentIcons = () => {
  return (
    <div className="commentIcons">
      <i class="fa-solid fa-image"></i>
      <i class="fa-solid fa-rainbow"></i>
    </div>
  );
};

const SendCommentIcon = () => {
  return (
    <div className="postComment">
      <i class="fa-solid fa-paper-plane"></i>
    </div>
  );
};

export default WriteComment;
