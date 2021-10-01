import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Menu = () => {
    return (
        <div className="listMenu">
            <i class="bi bi-list" style={{  "color" : "gray"}}></i>
            <div style={{"padding":"1rem"}}>
            <i class="bi bi-search " style={{"padding":"1rem" , "color" : "gray"}}></i>
            <i class="bi bi-gear" style={{  "color" : "gray"}}></i>
            </div>
            
        </div>
    )
}

export default Menu
