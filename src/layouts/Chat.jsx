import React from 'react'
import ChatHeader from '../components/chat/ChatHeader'
import ChatInput from '../components/chat/ChatInput';
import ChatContent from './../components/chat/ChatContent';

const Chat = () => {
    return (
        <div className="chatContainer">
          <ChatHeader/>
          <ChatContent/>
          <ChatInput/>
        </div>
    )
}

export default Chat