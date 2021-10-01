import React from "react";
import ChatContentReceived from "./ChatContentReceived";
import ChatContentSend from "./ChatContentSend";

const ChatContent = () => {
  return (
    <div className="chatContentStream">
      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />

      <ChatContentSend />
      <ChatContentReceived />
    </div>
  );
};

export default ChatContent;
