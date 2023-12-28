import React from "react";
import "./ToolTip.css";

// displays that notifications has not been implemented
const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
