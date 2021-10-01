import React from 'react'
import Menu from '../components/contacts/Menu'
import Contacts from '../components/contacts/Contacts'

const ContactList = () => {
    return (
        <div className = "contactsContainer">
            <Menu/>
            <Contacts/>
            
        </div>
    )
}

export default ContactList