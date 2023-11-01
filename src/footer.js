import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <FooterText />
    </section>
  );
};

const FooterText = () => {
  return <p>&copy; Stealth Stories - All rights reserved</p>;
};

export default Footer;
