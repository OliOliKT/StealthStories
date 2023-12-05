import React, { useEffect, useState } from 'react';
import "./MyPosts.css";
import Parse from 'parse';

import PostStats from "../components/PostStats";
import Title from "../components/MyPostsTitle";
import Feed from "../components/Feed";
import TopBarComponent from "../components/topBarComponent";
import Footer from "../components/footer";
import UserSettingsSidebar from '../components/UserSettingsSidebar';

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
            <Title/>
                <PostStats/>
                <Feed filterType="currentUserPosts" currentUser={loggedInUserId}/>
            </div>
            <Footer/>
        </>
    );
}

export default MyPosts;