import React, { useEffect, useState } from 'react';
import Parse from 'parse';

import PostStats from "../components/PostStats";
import Feed from "../components/Feed";
import TopBarComponent from "../components/TopBar";
import Footer from "../components/Footer";
import UserSettingsSidebar from '../components/UserSettingsSidebar';
import "./MyPosts.css";

function MyPosts() {
    const [loggedInUserId, setLoggedInUserId] = useState(null);

    useEffect(() => {
        async function fetchCurrentUser() {
            const currentUser = Parse.User.current();
            if (currentUser) {
                setLoggedInUserId(currentUser.id);
            }
        }
        fetchCurrentUser();
    }, []);

    return (
        <>
            <TopBarComponent/>
            <div className="my-posts-main-content">
                <UserSettingsSidebar className ="sidebar-my-posts"/>
                <h1 id="your-post-title">My posts</h1>
                <PostStats/>
                <Feed filterType="currentUserPosts" currentUser={loggedInUserId}/>
            </div>
            <Footer/>
        </>
    );
}

export default MyPosts;