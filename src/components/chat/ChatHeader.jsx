import React from "react";
import ContactImage from "../contacts/ContactImage";
import ContactName from "../contacts/ContactName";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const ChatHeader = () => {
  const logOut = () => {
    signOut(auth).then(console.log("logout succesfully"));
  };

  return (
    <div className="chatHeader">
      <div className="chatHeaderContact">
        <ContactImage />
        <ContactName />
      </div>
      <div className="functionalButtons">
        <i
          className="bi bi-camera-video-fill iconButton"
          style={{ padding: "1rem" }}
        ></i>
        <i
          className="bi bi-fullscreen iconButton"
          style={{ padding: "1rem" }}
        ></i>
        <i
          className="bi bi-door-closed-fill iconButton"
          style={{ padding: "1rem" }}
          onClick={logOut}
        ></i>
      </div>
    </div>
  );
};

export default ChatHeader;
