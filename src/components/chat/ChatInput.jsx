import React from 'react'

const ChatInput = () => {
    return (
        <div className="chatInput">
            <textarea type="text" className="messageInput" placeholder="Message..."  required />
            <div className="buttonBox">
            <button className="sendButton"><i class="bi bi-symmetry-horizontal"></i></button>

            </div>
        </div>
    )
}

export default ChatInput