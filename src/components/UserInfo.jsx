import React, { useEffect, useState } from 'react';
import Parse from 'parse';
import './UserInfo.css';

const UserInfo = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function fetchUsername() {
      try {
        const currentUser = Parse.User.current();
        if (currentUser) {
          const userQuery = new Parse.Query(Parse.User);
          userQuery.equalTo('objectId', currentUser.id);
          const user = await userQuery.first();
          const userUsername = user.get('username');
          setUsername(userUsername);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    }

    fetchUsername();
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
