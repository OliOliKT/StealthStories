import React from "react";
import "./ToolTip.css"; // Import CSS file for tooltip styles

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
