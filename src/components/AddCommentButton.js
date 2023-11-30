import React from 'react';
import "./AddCommentButton.css"; 

// AddCommentButton.js
function AddCommentButton({ onAddCommentClick }) {
  return (
    <button className="add-comment-button" onClick={onAddCommentClick}>
        <p className="add-comment-text">+ Add Comment</p>
    </button>
  );
}


export default AddCommentButton;
