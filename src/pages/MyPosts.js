import React from 'react';
import "./MyPosts.css";

import PostStats from "../components/PostStats";
import PostFilter from "../components/PostFilter";
import Feed from "../components/Feed";
import TopBarComponent from "../components/topBarComponent";
import Footer from "../components/footer";
import UserSettingsSidebar from '../components/UserSettingsSidebar';

function MyPosts() {
    return (
        <>
            <TopBarComponent/>
            <UserSettingsSidebar/>
            <div id="middle-content">
                <PostStats/>
                <PostFilter/>
                <Feed/>
            </div>
            <Footer/>
        </>
    );
}

export default MyPosts;