import React from 'react';

import "./AddCommentButton.css"; 

function AddCommentButton({ onAddCommentClick }) {
  return (
    <div className="add-comment-button-container">
    <button className="add-comment-button" onClick={onAddCommentClick}>
        <p className="add-comment-text">+ Add Comment</p>
    </button>
    </div>
  );
}


export default AddCommentButton;
