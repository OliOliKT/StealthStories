import React from "react";
import LikeButtonAndText from './LikeButtonAndText';
import CommentButtonAndText from './CommentButtonAndText';
import BellButtonAndText from './BellButtonAndText';
import './Post.css';

function Post({ postTitle, mood, postedBy, postContent }) {
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
            <LikeButtonAndText />
            <CommentButtonAndText />
            <BellButtonAndText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
