import React, { useState } from 'react'
import './Test.css'
import Modal from '../components/Modal'

export default function Test() {

    const modalRef = React.useRef();    

    const openModal = () => {
        modalRef.current.openModal()
    }

    return (
        <div className="">
            <button onClick={openModal}>Open Modal</button>
            <Modal ref={modalRef}>
               <h1>Modal Header</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia placeat commodi libero tenetur ipsam itaque recusandae omnis rerum praesentium ducimus sed laborum, minima, exercitationem ullam facilis alias ut. Voluptates?</p>
            </Modal>
        </div>
    )
}
