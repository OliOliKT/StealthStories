import React from "react";
import "./Information.css";

const Information = (props) => {
  return <div className="information-outerbox">{props.children}</div>;
};

export default Information;
