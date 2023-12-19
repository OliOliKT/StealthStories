import Parse from "parse";
import React, { useState } from "react";
import LikeButtonAndText from "./LikeButtonAndText";
import CommentButtonAndText from "./CommentButtonAndText";
import BellButtonAndText from "./BellButtonAndText";
import "./Post.css";

function Post({
  postTitle,
  mood,
  postedBy,
  daysAgo,
  postContent,
  postId,
  sipCount,
  numberOfComments,
  commentClickCallback,
}) {
  const [isSipped, setIsSipped] = useState(false);
  const [updatedSipCount, setUpdatedSipCount] = useState(sipCount);

  const handleSip = async () => {
    try {
      const Post = Parse.Object.extend("Post");
      const query = new Parse.Query(Post);
      const post = await query.get(postId);
      if (isSipped) {
        post.decrement("sips");
        setUpdatedSipCount(updatedSipCount - 1);
        setIsSipped(false);
      } else {
        post.increment("sips");
        setUpdatedSipCount(updatedSipCount + 1);
        setIsSipped(true);
      }
      await post.save();
    } catch (error) {
      console.error("Error incrementing sips:", error);
    }
  };

  return (
    <div className="individual-post">
      <div className="block-post-content" onClick={commentClickCallback}>
        <div className="avatar-area">
          <i className="fas fa-user-circle"></i>
          <div className="post-meta-data">
            <h2>
              {postTitle} <em className="mood"> Feeling {mood}</em>
            </h2>
            <p className="posted-by">
              Posted by {postedBy} • {daysAgo} days ago
            </p>
          </div>
        </div>
        <p className="post-content">{postContent}</p>
      </div>

      <div className="bottom-part-of-post">
        <div id="background-on-actionbar">
          <div className="actionbar-on-post">
            <LikeButtonAndText
              sipCount={updatedSipCount}
              onSip={handleSip}
              isSipped={isSipped}
              className={"icon-and-text"}
            />
            <CommentButtonAndText
              commentCount={numberOfComments}
              handleComment={commentClickCallback}
            />
            <BellButtonAndText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
