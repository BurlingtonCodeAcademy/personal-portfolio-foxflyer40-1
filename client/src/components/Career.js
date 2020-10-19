import React from 'react'
import './Career.css'
import Resume from '../0pix/Resume2020.PNG'
import myResume from '../0pix/myResume2020.pdf'


function Career(props) {
    return (
        
            <div id='careerBox'>
               
            <label >
               <div className='workLabel'>
                  (Click resume to download.)
               </div>
               <a href={(myResume)} download>
                  <img src={(Resume)} alt='Resume link'></img>
               </a>
            </label>


            </div>
      
    )
}

export default Career

