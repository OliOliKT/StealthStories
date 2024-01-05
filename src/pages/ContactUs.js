import React from "react";
import TopBarComponent from "../components/TopBar";
import InformationComponent from "../components/Information";
import Footer from "../components/Footer";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <TopBarComponent />
      <div className="contact-grid">
        <UserSettingsSidebar activePage="ContactUs" />
        <h1 className="pri-and-saf-title">Concact Us</h1>
        <p className="we-care"> Welcome to StealthStories! </p>
        <InformationComponent className="information-component">
          <p className="pri-and-saf-text">
            We love hearing from our users. Whether you have a question,
            feedback, story ideas, or just want to share your thoughts, we're
            here to listen. <br />
            <br />
            <strong style={{ fontSize: "16px" }}>Get in Touch</strong>
            <br />
            <strong>Email Us:</strong> Feel free to drop us a line at
            contact@stealthstories.com. We aim to respond within 2 business
            days. <br />
            <strong>Call Us:</strong> For more immediate assistance, give us a
            call at +45 32 12 34 56. Our lines are open Monday to Friday, 9am -
            5pm (CET).
            <br />
            <br />
            <strong style={{ fontSize: "16px" }}>
              Feedback and Suggestions
            </strong>
            <br />
            Your feedback is valuable to us. If you have suggestions on how we
            can improve, or if you want to see more of a particular type of
            content, let us know! We're always looking to grow and improve.
            <br />
            <br />
            We look forward to hearing from you!
            <br />
            The StealthStories Team
          </p>
        </InformationComponent>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
