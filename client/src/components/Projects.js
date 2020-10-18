import React from 'react'
import './Projects.css'


function Projects(props) {
    return (
        <div id='projectsContainer' style={{ display: props.seeProjects }}>
            <div id='projectsBox'>
                Projects
            </div>
        </div>
    )
}


export default Projects

