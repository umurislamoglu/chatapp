import React from "react";
import ContactImage from "./ContactImage";
import ContactText from "./ContactText";

const Contact = (props) => {
  const handleContactClick = (e) => {
    let childrens = e.currentTarget.parentElement.children;
    [...childrens].forEach((child) => {
      child.className = "contact";
    });

    e.currentTarget.className = "contact activeContact";
  };

  return (
    <div className={`contact`} onClick={handleContactClick}>
      <ContactImage />
      <ContactText />
    </div>
  );
};

export default Contact;
