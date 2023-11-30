import Parse from 'parse';
import React, { useState } from "react";
import LikeButtonAndText from './LikeButtonAndText';
import CommentButtonAndText from './CommentButtonAndText';
import BellButtonAndText from './BellButtonAndText';
import './Post.css';
import WriteComment from './CommentComponent';
import { useNavigate } from 'react-router-dom'; // Import useHistory

function Post({ postTitle, mood, postedBy, postContent, postId, sipCount, currentUser }) {
  const [isSipped, setIsSipped] = useState(false);
  const [updatedSipCount, setUpdatedSipCount] = useState(sipCount); // State to store updated sipCount
  const navigate = useNavigate();




  const handleCommentIconClick = () => {
    console.log(postId); // test to see if we log the id and not "undefined"
    navigate(`/posts/${postId}`, { state: { postTitle, mood, postedBy, postContent, postId } });
  };

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
            <LikeButtonAndText sipCount={updatedSipCount} onSip={handleSip} isSipped={isSipped} />
            <CommentButtonAndText onComment={handleCommentIconClick} />
            <BellButtonAndText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
