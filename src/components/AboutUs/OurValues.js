import React from "react";
import "./OurValues.css";

// This is a dumb component - it only gets rendered one time. It has no hooks and no state.
function OurValues() {
  return (
    <div className="our-values-content">
      <div className="individual-value">
        <div className="icon-box">
          <i className="fa-solid fa-user-secret"></i>
        </div>
        <p className="value-text">
          {" "}
          Anonymity is key! No one can recognize you - we promise{" "}
        </p>
      </div>

      <div className="individual-value">
        <div className="icon-box">
          <i className="fa-solid fa-hand-holding-heart"></i>
        </div>
        <p className="value-text"> Everyone are welcome </p>
      </div>

      <div className="individual-value">
        <div className="icon-box">
          <i className="fa-regular fa-face-laugh-wink"></i>
        </div>
        <p className="value-text">
          {" "}
          Positivity and openmindednes. We do not approve of judgement!{" "}
        </p>
      </div>
    </div>
  );
}

export default OurValues;
