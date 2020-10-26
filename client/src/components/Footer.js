// import REACT and css
import React from 'react'
import './Footer.css'

function Footer(props) {
    return (
        <div id='footerBox'>
            {/* link to linked in - opens in new tab */}
            <a target="_blank" href='https://www.linkedin.com/in/michael-muzzy/' rel="noopener noreferrer" className='bannerSelector'>
                <div className='pageLink' >LinkedIn</div>
            </a>
            {/* link to github - opens in new tab */}
            <a target="_blank" href='https://github.com/foxflyer40' rel="noopener noreferrer" className='bannerSelector'>
                <div className='pageLink' >GitHub</div>
            </a>
            {/* opens modal window for contact me form */}
            <div className='pageLink' onClick={props.openModal} >Contact</div>
        </div>
    )
}

export default Footer

