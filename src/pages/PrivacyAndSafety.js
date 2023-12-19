import React from "react";

import TopBarComponent from "../components/TopBar";
import InformationComponent from "../components/Information";
import Footer from "../components/Footer";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import "./PrivacyAndSafety.css";

function PrivacyAndSafety() {
  return (
    <>
      <TopBarComponent />
      <div className="privacy-grid">
        <UserSettingsSidebar />
        <h1 className="pri-and-saf-title">Privacy & Safety</h1>
        <p className="we-care"> We really do care </p>
        <InformationComponent className="information-component">
          <p className="pri-and-saf-text">
            At StealthStories, your privacy and safety are our top priorities.
            We understand the significance of anonymity when sharing personal
            stories and experiences. Here's how we ensure your information
            remains secure: <br />
            <br />
            <strong style={{ fontSize: "16px" }}>Anonymous Sharing</strong>
            <br />
            <strong>No Personal Data Required:</strong> We don't ask for
            personal information that could compromise your identity. Enjoy the
            freedom to share without providing any identifying details. <br />
            <strong>Anonymous Interactions:</strong> Engage, comment, and
            connect with others without revealing your identity. Your
            interactions are purely based on the stories and conversations, not
            on personal profiles.
            <br />
            <br />
            <strong style={{ fontSize: "16px" }}>Secure Platform</strong>
            <br />
            <strong>Data Encryption:</strong> All data shared on StealthStories
            is encrypted to ensure confidentiality. Your stories and
            interactions are protected against unauthorized access. <br />
            <strong>Anonymity Protection:</strong> We employ robust measures to
            maintain the anonymity of all users. Our platform is designed to
            prevent any unintended exposure of your identity.
            <br />
            <br />
            <strong style={{ fontSize: "16px" }}>Safety Measures</strong> <br />
            <strong>Community Guidelines:</strong> We have strict community
            guidelines in place to maintain a safe and respectful environment.
            Any content violating these guidelines is promptly reviewed and
            addressed. <br />
            <strong>Report & Moderation: </strong>
            Users can report any inappropriate content or behavior. Our
            moderation team ensures swift action to maintain a supportive and
            secure space for everyone.
            <br />
            <br />
            <strong style={{ fontSize: "16px" }}> Your Control</strong> <br />
            <strong>Content Removal:</strong> You have the authority to remove
            your content at any time. Your stories are yours to share and delete
            as you see fit.
            <br />
            <strong>Opt-Out Options:</strong> If you choose to disengage, you
            can opt-out of discussions or interactions without any
            repercussions. <br />
            <br />
            <strong style={{ fontSize: "16px" }}>Continuous Improvement</strong>
            <br />
            <strong>Constant Evaluation:</strong> We continuously review and
            enhance our privacy measures to adapt to evolving security standards
            and ensure your peace of mind.
            <br />
            <br />
            At StealthStories, we strive to provide a platform where sharing is
            liberating and secure. Your stories are valuable, and your anonymity
            is non-negotiable. Join us in creating a community built on trust,
            empathy, and respect for each other's privacy.
          </p>
        </InformationComponent>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyAndSafety;
