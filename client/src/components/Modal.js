import React, { useState, useEffect } from 'react'
import './Modal.css'


const Modal = ({ closeModal }) => {

    return (
        <div id='modalWindow'>
            <div id='modal-text'>Hello! I am a Modal!</div>
            <button
                id='closeModal'
                onClick={() => { closeModal() }}
            >Close
            </button>
        </div>
    )

}
export default Modal