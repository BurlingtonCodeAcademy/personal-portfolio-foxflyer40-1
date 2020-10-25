// import REACT, css and picture for home page
import React from 'react'
import './Home.css'
import homePicture from '../0pix/homePicture.jpg'

function Home(props) {
    return (
        <div id='homeBox'>
            <div id='homeText'>
                <p>Michael Muzzy</p>
                <p>Full-Stack Web Developer</p>
            </div>
            <div id='homePic'>
                <img src={(homePicture)  } />
            </div>
        </div>
    )
}

export default Home
