import React, { useState, forwardRef, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = forwardRef((props, ref) => {

    const [showModal, setShowModal] = useState(false)

    useImperativeHandle(ref, () => {
         return {
             openModal: () => open(),
             closeModal: () => close()
         }
        }) 

    const open = () => {
        setShowModal(true)
    }

    const close = () => {
        setShowModal(false)
    }

    if (showModal) {
       return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div className="modal-backdrop" onClick={close} />
                <div className="modal-box">
                    {props.children}
                </div>
            </div>, document.getElementById('modal-root'))
    }
return null
})

export default Modal