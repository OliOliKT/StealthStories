import React from "react";
import "./ButtonAndText.css";

// this is a resuable component which is e.g. used Post and Comment
// component is expecting to receive data or callbacks passed down to it from a parent component
// it changes it state based on the parent component, which then passes the data back to this component.
function LikeButtonAndText({ sipCount, onSip, isSipped, className }) {
  const iconClass = isSipped
    ? "fa-solid fa-mug-hot liked"
    : "fa-solid fa-mug-hot";

  return (
    <div className={className} onClick={onSip}>
      <i className={iconClass}></i>
      <p className="icon-text">{sipCount}</p>
    </div>
  );
}

export default LikeButtonAndText;

/*
It has these props, so it can be rendered inside the parent component like this: 
It has the className attribute as well as the makes it easier to style it 
- e.g. it could be styled in one way in one component and in another way in another compoent 
<LikeButtonAndText
  sipCount={10}
  onSip={handleSipFunction}
  isSipped={true}
  className="custom-like-button"
/>
*/
