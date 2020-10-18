import React from 'react'
import './Interests.css'


function Interests(props) {
    return (
        <div id='interestsContainer' style={{ display: props.seeInterests }}>
            <div id='interestsBox'>
                Interests
            </div>
        </div>
    )
}

export default Interests

