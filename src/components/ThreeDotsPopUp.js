import React from 'react';
import "./ThreeDotsPopUp.css";

function ThreeDotsPopUp() {
  return (
    <div className="background-pop-up">
      <div className="delete-action">
      <div className="icon-container-pop-up"><i className="fa-solid fa-trash-can"></i></div>
      <p className="pop-up-text"> Delete </p>
      </div>
      <div className="report-action">
      <div className="icon-container-pop-up"><i class="fa-solid fa-flag"></i></div>
      <p className="pop-up-text"> Report </p>
      </div>
    </div>
  );
}

export default ThreeDotsPopUp;