// import REACT, css file, links to projects on git hub
import React from 'react'
import './Projects.css'
import ParkBTV from '../0pix/ParkBTV.png'
import TicTacToe from '../0pix/TicTacToe.PNG'
import GeoVermont from '../0pix/GeoVermontSM.png'
import Yelpington from '../0pix/YelpingtonSM.png'

function Projects(props) {
    return (
        <div id='projectsBox'>
            {/* link to capstone project - opens in new tab */}
            <label>
                <div className='projectLabel'>
                    Park Burlington
                  <h6>(BCA capstone project)</h6>
                    <h6>Click image to view project in new tab.</h6>
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='http://park-burlington.herokuapp.com/'>
                    <img src={(ParkBTV)} alt='Park Burlington map'></img>
                </a>
                <h6>(Demo version)</h6>
            </label>
            {/* divider line between items on page */}
            <div id='divider'></div>
            {/* link to tic-tac toe project on heroku */}
            <label>
                <div className='projectLabel'>
                    Tic Tac Toe
               </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://michael-muzzy-tic-tac-toe.herokuapp.com/'>
                    <img src={(TicTacToe)} alt='Tic-Tac-Toe board'></img>
                </a>
            </label>
            {/* divider line between items on page */}
            <div id='divider'></div>
            {/* link to yelpington app on github */}
            <div id='gitBox'>
                <label>
                    <div className='projectLabel'>
                        Yelpington
                     <h6>(Github link)</h6>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://github.com/BurlingtonCodeAcademy/yelpington-foxflyer40'>
                            <img src={(Yelpington)} alt='Yelpington board'></img>
                        </a>
                    </div>
                </label>
                {/* divider line between items on page */}
                <div id='divider'></div>
                {/* link to Geo Vermont project on github */}
                <label>
                    <div className='projectLabel'>
                        GeoVermont
                     <h6>(Github link)</h6>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-anis-michael'>
                            <img src={(GeoVermont)} alt='GeoVermont board'></img>
                        </a>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Projects
