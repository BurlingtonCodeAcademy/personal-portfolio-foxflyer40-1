import React, { useState } from 'react'
import './Footer.css'
import Modal from './Modal.js'


function Footer(props) {
   


    return (

        <div id='footerBox'>

            <a target="_blank" href='https://www.linkedin.com/in/michael-muzzy/' rel="noopener noreferrer" className='bannerSelector'>
                <div className='pageLink' >LinkedIn</div>
            </a>

            <a target="_blank" href='https://github.com/foxflyer40' rel="noopener noreferrer" className='bannerSelector'>
                <div className='pageLink' >GitHub</div>
            </a>

            <div className='pageLink' onClick={props.openModal} >Contact</div>
           
            
        </div>

    )
}

Footer.propTypes = {

}

export default Footer

