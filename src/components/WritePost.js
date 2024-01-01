import React, { useState, useEffect } from "react";
import Parse from "parse";
import "./WritePost.css";

// child component of the Feeds
function WritePost({ onPostPosted }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [userId, setUserId] = useState("unknown user");
  const [mood, setMood] = useState("");

  // useEffect because we need to retrieve data from the backend
  // this method is a bit redundant because we already get the user information when the user logs in
  useEffect(() => {
    // async funtion because we need to page to be responsive meanwhile
    async function fetchUserData() {
      try {
        // fetches the current user from the database
        const currentUser = Parse.User.current();
        // if the current user exists
        if (currentUser) {
          // Parse knows the Class "Session" cause it is a standard class from Parse, unlike e.g. "Comment" or "Post"
          const sessionQuery = new Parse.Query(Parse.Session);
          // we check if the currentUser is equal to the user which session is curently running
          sessionQuery.equalTo("user", currentUser);
          // if users login on different devices (multiple sessions), parse looks for the first match (current)
          const session = await sessionQuery.first();
          // the session exist
          if (session) {
            // fecthes the user id from the user currently having a session
            const userObjectId = session.get("user").id;
            // we create a new insance of the query object to search against the User class in the backend
            // this is redundant becuase we only have users with unique ids (parse will make sure of that)
            // instead of:
            // const userQuery = new Parse.Query(Parse.User);
            // userQuery.equalTo("objectId", userObjectId);
            // const user = await userQuery.first();
            // we can just write: const user = await Parse.User.get(userObjectId);
            const userQuery = new Parse.Query(Parse.User);
            // we see if the objectid From the User class is the same as the one we just got from the Session class
            userQuery.equalTo("objectId", userObjectId);
            const user = await userQuery.first();
            if (user) {
              // wrong name here - becuase we actually set username, not userid
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

  // creates the post and then increments the post count with one, given by the parent prob onPostPosted
  const handleSendPost = async () => {
    const Post = Parse.Object.extend("Post");
    const newPost = new Post();
    // sets the post with the relevant informations
    newPost.set("postContent", post);
    newPost.set("postTitle", title);
    newPost.set("userId", userId);
    newPost.set("userObjectId", Parse.User.current());
    newPost.set("mood", mood);

    // after a post has been created this is responsible for settinng the states to empty again
    document.getElementById("title").value = "";
    document.getElementById("post").value = "";
    document.getElementById("mood-filter").value = "all";

    try {
      // saves the post
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
      />
    </section>
  );
}

// sub-component
const PostBox = ({ setTitle, setPost, handleSendPost, setMood }) => {
  // the user can post a Post just by pressing enter
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
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="all" selected>
            All
          </option>
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
        placeholder="Your post..."
        rows="5"
        onChange={(e) => setPost(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <PostBorder handleSendPost={handleSendPost} />
    </div>
  );
};

// sub-component with the icons and send post button
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

// sub-component for Postborder (the sumbit post icon)
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
