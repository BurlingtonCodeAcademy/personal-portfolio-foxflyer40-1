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
                <a
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
                <a href='/'>
                    <img src={(Echo)} alt='Link to Photography'></img>
                </a>
            </label>
        </div>

    )
}

export default Interests

