import React from 'react'
import './Projects.css'
import ParkBTV from '../0pix/ParkBTV.png'
import TicTacToe from '../0pix/TicTacToe.PNG'
import GeoVermont from '../0pix/GeoVermontSM.png'
import Yelpington from '../0pix/YelpingtonSM.png'

function Projects(props) {
    return (

        <div id='projectsBox'>

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
            <h1 id='divider'></h1>
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
            <h1 id='divider'></h1>
            <div  id='gitBox'>
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
               <h1 id='divider'></h1>

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

