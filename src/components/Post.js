import Parse from 'parse';
import React, { useState, useEffect } from "react";
import LikeButtonAndText from './LikeButtonAndText';
import CommentButtonAndText from './CommentButtonAndText';
import BellButtonAndText from './BellButtonAndText';
import './Post.css';
import { useNavigate, useLocation } from 'react-router-dom';
 
function Post({ postTitle, mood, postedBy, postContent, postId, sipCount, numberOfComments, commentClickCallback }) {
  const [isSipped, setIsSipped] = useState(false);
  const [updatedSipCount, setUpdatedSipCount] = useState(sipCount);

  /* 
  When a user clicks the 'sip' (coffee) button, the total sips for a post will be incremented by 1.
  If the user clicks it once more, the total sips will be decremented instead.
  Styling the in 'LikeButtonAndText' determined the color based on the sipped state.
  */
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
    <div className="IndividualPost">
      <div className="BlockPostContent">
        <div className="textPartOfPost">
          <div className="avatar-area">
            <i className="fas fa-user-circle"></i>
            <div className="post-meta-data">
              <h2>
                {postTitle} - <em className="mood">feeling {mood}</em>
              </h2>
              <p className="posted-by">Posted by {postedBy}</p>
            </div>
          </div>
          <p className="post-content">{postContent}</p>
        </div>
      </div>

      <div className="bottomPartOfPost">
        <div id="backgroundOnActionBar">
          <div className="actionBarOnPost">
            <LikeButtonAndText sipCount={updatedSipCount} onSip={handleSip} isSipped={isSipped} className={"iconAndText"}/>
            <CommentButtonAndText commentCount={numberOfComments} onComment={commentClickCallback} />
            <BellButtonAndText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
