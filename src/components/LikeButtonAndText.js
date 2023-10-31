import React from "react";
import './ButtonAndText.css';

function LikeButtonAndText() {
  return (
    <div className="iconAndText">
      <a href="#" className="iconLink">
        <i className="fa-solid fa-mug-hot"></i>
      </a>
      <p className="iconText">45</p>
    </div>
  );
}

export default LikeButtonAndText;
