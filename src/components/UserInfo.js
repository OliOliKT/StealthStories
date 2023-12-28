import React, { useEffect, useState } from "react";
import Parse from "parse";
import "./UserInfo.css";

// compoent responsible for showing the current users username in tthe userSettings page
const UserInfo = () => {
  // useState to change to userName of the given user
  // we had the idea that one could change the username, but that wasn't implemented.
  const [username, setUsername] = useState("");

  // useEffect is used to fetch the current  user from the database
  useEffect(() => {
    // the function is async so the page is still functional while fetching the user
    async function fetchUsername() {
      try {
        // use Parse to fecth the current user.
        const currentUser = Parse.User.current();
        // if the current user exists this will be executed
        if (currentUser) {
          // userQuery targets the User class
          const userQuery = new Parse.Query(Parse.User);
          // if the users id is equal to the current users id
          userQuery.equalTo("objectId", currentUser.id);
          // instead of .first() which takes the first object found by the queury
          // we could have used .get(objectId) which would just look to match the users id
          const user = await userQuery.first();
          // then we fetch the username
          const userUsername = user.get("username");
          // the userName gets its state updated.
          setUsername(userUsername);
        }
        // error if Promise can't be resolved.
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    }
    fetchUsername();
    // empty dependency array, cause it only needs to be rendered one time.
  }, []);

  return (
    <div className="user-info">
      <i className="fas fa-user-circle"></i>
      <div>
        <p className="alias">{username}</p>
      </div>
    </div>
  );
};

export default UserInfo;
