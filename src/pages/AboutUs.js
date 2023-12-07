import React from "react";
import "./AboutUs.css";

import TopBarComponent from "../components/topBarComponent";
import InformationComponent from "../components/Information";
import Footer from "../components/footer";
import UserSettingsSidebar from "../components/UserSettingsSidebar";

const AboutUs = () => {
  return (
    <>
      <TopBarComponent />
      <div className="about-us-grid">
        <UserSettingsSidebar />
        <h1 className="about-us-title">About StealthStories</h1>
        <InformationComponent className="information-component">
          <p className="about-us-text">
            Nobody's perfect. At some point in our lives, we have done things
            that we know we shouldn’t have, or we end up regretting. It’s a part
            of life to make mistakes, but it is also a part of life to move on
            and live with them. StealthStories is a safe space, where people can
            share their stories anonymously. It is a social sharing platform,
            where people can post stories, comment on, and share other’s
            stories. StealthStories can serve as a medium for people to get
            things off their chests and support them in their healing process.
          </p>
        </InformationComponent>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
