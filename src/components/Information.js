import React from "react";
import "./Information.css";

const InformationComponent = (props) => {
  return <div className="information-outerbox">{props.children}</div>;
};

export default InformationComponent;
