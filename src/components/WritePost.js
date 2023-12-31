import React, { useState, useEffect } from "react";
import Parse from "parse";
import "./WritePost.css";

function WritePost({ onPostPosted }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [userId, setUserId] = useState("unknown user");
  const [mood, setMood] = useState("all");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const currentUser = Parse.User.current();
        if (currentUser) {
          const sessionQuery = new Parse.Query(Parse.Session);
          sessionQuery.equalTo("user", currentUser);
          const session = await sessionQuery.first();
          if (session) {
            const userObjectId = session.get("user").id;
            const userQuery = new Parse.Query(Parse.User);
            userQuery.equalTo("objectId", userObjectId);
            const user = await userQuery.first();
            if (user) {
              const username = user.get("username");
              setUserId(username);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  const handleSendPost = async () => {
    const Post = Parse.Object.extend("Post");
    const newPost = new Post();

    newPost.set("postContent", post);
    newPost.set("postTitle", title);
    newPost.set("userId", userId);
    newPost.set("userObjectId", Parse.User.current());
    newPost.set("mood", mood);

    document.getElementById("title").value = "";
    document.getElementById("post").value = "";
    document.getElementById("mood-filter").value = "all";

    try {
      await newPost.save();
      console.log("Post saved successfully!");
    } catch (error) {
      console.error("Error saving post:", error);
    }
    onPostPosted();
  };

  return (
    <section className="write-post">
      <PostBox
        setTitle={setTitle}
        setPost={setPost}
        handleSendPost={handleSendPost}
        setMood={setMood}
        mood={mood}
      />
    </section>
  );
}

const PostBox = ({ setTitle, mood, setPost, handleSendPost, setMood }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendPost();
    }
  };
  return (
    <div>
      <textarea
        id="title"
        placeholder="Your title..."
        rows="5"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <div id="mood-selector">
        <label htmlFor="mood-chooser">Mood: </label>
        <select
          id="mood-chooser"
          name="mood-chooser-list"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="all">All</option>
          <option value="happy">Happy</option>
          <option value="cheeky">Cheeky</option>
          <option value="sad">Sad</option>
          <option value="cheerful">Cheerful</option>
          <option value="excited">Excited</option>
          <option value="envious">Envious</option>
          <option value="angry">Angry</option>
          <option value="outraged">Outraged</option>
          <option value="disappointed">Disappointed</option>
          <option value="surprised">Surprised</option>
          <option value="annoyed">Annoyed</option>
          <option value="fulfilled">Fulfilled</option>
          <option value="trusting">Trusting</option>
          <option value="inspired">Inspired</option>
          <option value="brave">Brave</option>
          <option value="proud">Proud</option>
          <option value="depressed">Depressed</option>
          <option value="embarrassed">Embarrassed</option>
          <option value="guilty">Guilty</option>
          <option value="scared">Scared</option>
        </select>
      </div>
      <textarea
        id="post"
        placeholder="Your story..."
        rows="5"
        onChange={(e) => setPost(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <PostBorder handleSendPost={handleSendPost} />
    </div>
  );
};

const PostBorder = ({ handleSendPost }) => {
  return (
    <div className="post-border">
      <div className="post-icons">
        <i className="fa-solid fa-image not-implemented"></i>
        <i className="fa-solid fa-rainbow not-implemented"></i>
      </div>
      <SendPostIcon handleSendPost={handleSendPost} />
    </div>
  );
};

const SendPostIcon = ({ handleSendPost }) => {
  const handleClick = () => {
    handleSendPost();
  };

  return (
    <div className="post-post" onClick={handleClick}>
      <i className="fa-solid fa-paper-plane"></i>
    </div>
  );
};

export default WritePost;
