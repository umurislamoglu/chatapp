import React from 'react'
import ContactImage from './ContactImage';
import ContactText from './ContactText';

const Contact = (props) => {

    return (
        <div className={`contact ${props.active}`}>
            <ContactImage/>
            <ContactText/>
        </div>
    )
}

export default Contact
