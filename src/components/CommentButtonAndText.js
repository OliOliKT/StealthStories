import React from "react";
import "./ButtonAndText.css";
import { Link } from "react-router-dom";


function CommentButtonAndText() {
  return (
    <div className="iconAndText">

      <Link to="/IndividualPost" className="iconLink">
        <i className="fa-solid fa-comment"></i>
      </Link>
      <p className="iconText">153</p>
      
    </div>
  );
}

export default CommentButtonAndText;
