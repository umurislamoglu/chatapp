import React from 'react'
import ContactImage from "../contacts/ContactImage"
import ContactName from "../contacts/ContactName"

const ChatHeader = () => {
    return (
        <div className="chatHeader">
        <div className="chatHeaderContact">
            <ContactImage/>
            <ContactName />
        </div>
        <div className="functionalButtons">
        <i class="bi bi-camera-video-fill" style={{"padding":"1rem" , "color" : "gray"}}></i>
        <i class="bi bi-fullscreen" style={{"padding":"1rem" , "color" : "gray"}}></i>
        <i class="bi bi-three-dots-vertical" style={{"padding":"1rem" , "color" : "gray"}}></i>
        </div>
        </div>
    )
}

export default ChatHeader
