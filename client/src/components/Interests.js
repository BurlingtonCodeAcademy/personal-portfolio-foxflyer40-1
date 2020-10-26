// Import React, css File, and images used
import React from 'react'
import './Interests.css'
import RCAV8R from '../0pix/RCAV8Rsm.jpg'
import Echo from '../0pix/Echosm.jpg'

function Interests(props) {
    return (
        <div id='interestsBox'>
            <label >
                <div className='hobbyLabel'>
                    RC Aviation
               </div>
                <a // opens target url in new tab
                    target="_blank"
                    rel="noopener noreferrer"
                    href='http://www.greenmountainrc.org/'>
                    <img src={(RCAV8R)} alt='Link to RC Aviation'></img>
                </a>
            </label>
            <div id='divider'></div>
            <label >
                <div className='hobbyLabel'>
                    Photography
                  <h6>(link to gallery coming soon)</h6>
                </div>
                <a // target not created yet - redirect to home page
                    href='/'> 
                    <img src={(Echo)} alt='Link to Photography'></img>
                </a>
            </label>
        </div>
    )
}

export default Interests
