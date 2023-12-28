import Parse from "parse";
import React, { useState } from "react";
import LikeButtonAndText from "./LikeButtonAndText";
import CommentButtonAndText from "./CommentButtonAndText";
import BellButtonAndText from "./BellButtonAndText";
import "./Post.css";

// child component of Feed and IndividualPost, from which it is given these props to be rendered
// whenever changes to the Feed happens
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
  // Two useStates:
  // Default value is isSipped is false
  // Default value of updatedSipCount is the current sipCount of the post
  const [isSipped, setIsSipped] = useState(false);
  const [updatedSipCount, setUpdatedSipCount] = useState(sipCount);

  const handleSip = async () => {
    try {
      // we create a subclass of our Post class in the database
      // But we could just write: const query = new Parse.Query("Post");
      const Post = Parse.Object.extend("Post");
      const query = new Parse.Query(Post);
      // await waits for the Promise, of fetching posts, to be resolved
      const post = await query.get(postId);
      if (isSipped) {
        // decrement is a Parse method which allows us to decrement the sips
        post.decrement("sips");
        setUpdatedSipCount(updatedSipCount - 1);
        setIsSipped(false);
      }
      // increment is a Parse method which allows us to increment the sips
      else {
        post.increment("sips");
        setUpdatedSipCount(updatedSipCount + 1);
        setIsSipped(true);
      }
      // waits for the Promise, to save the updated posts, to be resolved
      await post.save();
      // catches error is Promise is not resolved
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
            {/* Sends these props to the child component */}
            <LikeButtonAndText
              sipCount={updatedSipCount}
              onSip={handleSip}
              isSipped={isSipped}
              className={"icon-and-text"}
            />
            {/* Sends these props to the child component */}
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
