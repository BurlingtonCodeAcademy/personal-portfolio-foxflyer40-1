import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header(props) {


    return (
       
            <div id='headerBox'>
                <Link className='pageLink' to='/'>Home</Link>
                <Link className='pageLink' to='/about'  >About</Link>
                <Link className='pageLink' to='/projects'  >Projects</Link>
                <Link className='pageLink' to='/interests'  >Interests</Link>
                <Link className='pageLink' to='/career'  >Career</Link>
            </div>
       
    )
}



export default Header

