import React from "react";
import "./UserCommentsComponent.css";
import LikeButtonAndText from "./LikeButtonAndText";

const comments = [
  {
    CommentBy: "FastSnail",
    CommentText:
      "Wow, I'm sorry to hear what you been through! Hope your luck will turn soon and you will be financially stable again!",
    TimePosted: "24 minutes ago",
  },
  {
    CommentBy: "WickedRabbit",
    CommentText:
      "Thanks for sharing, seems difficult for you and your family...",
    TimePosted: "1 hours ago",
  },
  {
    CommentBy: "SaltyCake",
    CommentText: "Don't be ashamed. Sound tough... hope things will get better",
    TimePosted: "3 hours ago",
  },
  {
    CommentBy: "CaramelDuck",
    CommentText: "Uh! Good luck with everything buddy!",
    TimePosted: "3 hours ago",
  },
];

const UserComment = () => {
  return (
    <section className="userComments">
      {comments.map((comment, index) => (
        <CommentByUser
          key={index}
          commentBy={comment.CommentBy}
          commentText={comment.CommentText}
          timePosted={comment.TimePosted}
        />
      ))}
    </section>
  );
};

const CommentByUser = ({ commentBy, commentText, timePosted }) => {
  return (
    <div id="comments">
      <CommentInfo commentBy={commentBy} timePosted={timePosted} />
      <CommentText commentText={commentText} />
      <div>
        <CommentBorder />
      </div>
    </div>
  );
};

const CommentInfo = ({ commentBy, timePosted }) => {
  return (
    <div className="userInfo">
      <i class="fas fa-user-circle" id="userIcon"></i>
      <div id="userDetails">
        <p id="commentBy">
          {`${commentBy} ${timePosted}` /* FastSnail 24 minutes ago */}
        </p>
      </div>
    </div>
  );
};

const CommentText = ({ commentText }) => {
  return (
    <div className="userComment">
      <p>{commentText}</p>
    </div>
  );
};

const CommentBorder = () => {
  return (
    <div className="commentBorder">
      <LikeButtonAndText />
    </div>
  );
};

export default UserComment;
