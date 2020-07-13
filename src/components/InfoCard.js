import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './InfoCard.css'

export default function InfoCard(props) {
    console.log('props.icon', props.icon)
    return (
        <div className="item">
            <div className="title">
                    <FontAwesomeIcon icon={faHome} /><h1>{props.title}</h1>
            </div>
            <p>{props.description}</p>
        </div>
    )
}
