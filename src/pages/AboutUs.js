import React from "react";
import "./AboutUs.css";
import TopBar from "../components/TopBar";
import Information from "../components/Information";
import Footer from "../components/Footer";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import OurValues from "../components/OurValues";

function AboutUs() {
  return (
    <>
      <TopBar />
      <div className="about-us-grid">
        <UserSettingsSidebar activePage="AboutUs" />
        <h1 className="about-us-title">About StealthStories</h1>
        <p className="hi-there"> Hi there! </p>
        <Information className="information-component">
          <p className="about-us-text">
            Welcome to StealthStories! The place where secrets find their safe
            haven and anonymity sparks candid conversations. We believe in the
            power of sharing untold stories without fear of judgment or
            exposure. <br></br>
            <br></br>
            At StealthStories, we provide a platform where individuals can
            unleash their inner thoughts, confessions, and experiences without
            revealing their identity. Whether it's a personal anecdote, a secret
            passion, or a hidden truth, this is the space where your story can
            be heard without any inhibitions. <br></br>
            <br></br>
            Our community thrives on the connections forged through shared
            secrets. Here, anonymity isn't just a feature; it's the foundation
            that fosters genuine conversations, empathy, and understanding. You
            can explore the unfiltered thoughts and experiences of others while
            feeling liberated to express your own. <br></br>
            <br></br>
            Our commitment to privacy and security is unwavering. Your anonymity
            is safeguarded, ensuring a safe space for uninhibited expression.
            StealthStories is where curiosity meets confidentiality, encouraging
            the exploration of diverse perspectives without the burden of
            identity. <br></br>
            <br></br>
            Join us in creating a community where secrets become bridges,
            connecting people through the power of shared experiences. Embrace
            the freedom to express, listen, and connect on StealthStories, where
            anonymity meets authenticity. <br></br>
          </p>
        </Information>
        <p className="our-values-header"> Our Values </p>
        <OurValues />
        <img
          src={process.env.PUBLIC_URL + "/images/aboutUs.jpg"}
          alt="Description"
          className="about-us-image"
        />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
