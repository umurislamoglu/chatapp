import React from 'react'
import ContactList from './ContactList'
import Chat from './Chat';

const Dashboard = () => {
    return (
        <div className="container">
            <ContactList/>
            <Chat/>
        </div>
    )
}

export default Dashboard
