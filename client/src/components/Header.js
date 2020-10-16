import React, { useEffect, useClass } from 'react'
import './Header.css'


function Header(props) {
    return (
        <div id='headerContainer'>
            <div id='headerBox'>
                <a>About</a>
                <a>Projects</a>
                <a>Interests</a>
                <a>Career</a>
            </div>
        </div>
    )
}



export default Header

