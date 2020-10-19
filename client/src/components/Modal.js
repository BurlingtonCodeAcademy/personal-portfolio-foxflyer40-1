import React from 'react'
import './Modal.css'


const Modal = ({ props }) => {

    return (
        <div id='modalWindow'>
            <div id='footForm'>
                <input className='input' type='text' id='name' placeholder=' Name' />
                <input className='input' type='text' id='email' placeholder=" Email" />
                <textarea className='input' id='message' placeholder=" Message"></textarea>
                <button id="sendEmail" type='submit'> Send
                    Message</button>
            </div>
            <button
                id='closeModal'
                onClick={ props.closeModal }
            >Close
            </button>
        </div>
    )

}
export default Modal