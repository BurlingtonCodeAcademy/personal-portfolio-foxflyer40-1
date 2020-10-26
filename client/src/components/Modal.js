// import REACT, and css file
import React from 'react'
import './Modal.css'

const Modal = ({ closeModal }) => {
// on submit - alert user that form was sent(which is a lie because I do not have a form handler until we cover it this week)
    const submitForm = (event) => {
        alert(`Thank you. Your message was sent`)
    }
// modal window for contact info to send to me on submit
    return (
        <div id='modalWindow'>
            <form id='footForm' onSubmit={submitForm}>
                <input class='input' type='text' id='name' placeholder=' Name' />
                <br />
                <input class='input' type='text' id='email' placeholder=" Email" />
                <br />
                <textarea class='input' type='input' id='message' placeholder=" Message"></textarea>
                <br />
                <button id="sendEmail" type='submit' > Send Message</button>
                <br />
                <br />
                <button type='button'
                    id='closeModal'
                    onClick={() => { closeModal() }}
                >Close Window
            </button>
            </form>
        </div>
    )
}


export default Modal