import React from "react";
import "./Information.css";

/* This is the child component of AboutUs and PrivacyAndSafety component 
Inside of these page components there is a <p> tag which contains a child of the Information component 
the AboutUs and PrivacyAndSafety component is then responsible for rendering the relevant 
child to the information box */
const Information = (props) => {
  return <div className="information-outerbox">{props.children}</div>;
};

export default Information;

// The Information component acts as a reusable container that is used in the AboutUs
// and PrivacyAndSafety components (parent components). It is designed to display content
// passed to it as children, which allows for flexibility in what it renders.
// The content to be displayed is wrapped within the Information component tags in the
// parent components, making the parent responsible for providing the specific content
// (such as a <p> tag with text) that will be rendered inside the Information component's
// <div> with the class "information-outerbox".
