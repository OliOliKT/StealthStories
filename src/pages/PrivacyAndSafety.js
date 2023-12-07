import React from "react";

import TopBarComponent from "../components/topBarComponent";
import InformationComponent from "../components/Information";
import Footer from "../components/footer";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import "./PrivacyAndSafety.css";

const PrivacyAndSafety = () => {
  return (
    <>
      <TopBarComponent />
      <div className="privacy-grid">
        <UserSettingsSidebar />
        <h1 className="pri-and-saf-title">Privacy & Safety</h1>
        <InformationComponent className="information-component">
          <p className="pri-and-saf-text">
            At StealthStories, we understand the importance of privacy and the
            sensitivity of your personal stories. Our platform is built on the
            foundation of anonymity, ensuring that you can share your
            experiences without the fear of being identified. We employ robust
            security measures to protect your anonymity and the integrity of
            your stories. From encrypted connections to strict data handling
            policies, we are dedicated to maintaining a secure environment where
            your voice can be heard without compromise.
          </p>
        </InformationComponent>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyAndSafety;
