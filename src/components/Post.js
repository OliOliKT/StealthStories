import React from "react";
import LikeButtonAndText from './LikeButtonAndText';
import CommentButtonAndText from './CommentButtonAndText';
import BellButtonAndText from './BellButtonAndText';
import './Post.css';

function Post() {
  return (
    <div>
      <div className="IndividualPost">
        <div className="BlockPostContent">
          <div className="textPartOfPost">
            <div className="avatar-area">
              <i className="fas fa-user-circle"></i>
              <div className="post-meta-data">
                <h2>
                  I stole a clock from a kindergarden
                  <em className="mood"> Feeling cheeky</em>
                </h2>
                <p className="posted-by">Posted by oli_oli_kt 3 months ago</p>
              </div>
            </div>
            <p className="post-content">
              I was the very last parent to pick up my son from kindergarden
              that day. We have struggled financially for a few years since the
              hospital bills for my mom have been pretty rough. I don’t know how
              a kindergarden got hold of such an expensive piece of decoration,
              but on the wall in the main dining room hang an Arne Jacobsen
              clock worth around 200 dollars. To be honest I don’t know why I
              did it, because a clock will not make a huge difference in our
              lives, but as we were about to leave, I quickly climbed up on a
              table of took the clock under my jacket and left.
            </p>
          </div>
        </div>

        <div className="bottomPartOfPost">
          <div id="backgroundOnActionBar">
            <div className="actionBarOnPost">
             <LikeButtonAndText/>
             <CommentButtonAndText/>
             <BellButtonAndText/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
