// import REACT, and css file
import React from 'react'
import './Modal.css'

const Modal = ({ closeModal }) => {
    return (
        <div id='modalWindow'>
            <div id='footForm'>
                <input class='input' type='text' id='name' placeholder=' Name' />
                <input class='input' type='text' id='email' placeholder=" Email" />
                <textarea class='input' id='message' placeholder=" Message"></textarea>
                <button id="sendEmail" type='submit'><img class='icons' src='./1images/footerlink-email.png' /> Send
                    Message</button>
            </div>
            <button
                id='closeModal'
                onClick={() => { closeModal() }}
            >Close
            </button>
        </div>
    )
}
export default Modal