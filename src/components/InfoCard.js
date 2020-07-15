import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRProject, faPython,  } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faThList, faDesktop } from '@fortawesome/free-solid-svg-icons'
import './InfoCard.css'

export default function InfoCard({ icon, title, skills }) {

    let fontAwesomeIcon; 
    
        switch (icon) {
            case "faDatabase":
                fontAwesomeIcon = <FontAwesomeIcon icon={faDatabase} />
                break;
            case "faPython":
                fontAwesomeIcon = <FontAwesomeIcon icon={faPython} />
                break;
            case "faRProject":
                fontAwesomeIcon = <FontAwesomeIcon icon={faRProject} />
                break;
            case "faThList":
                fontAwesomeIcon = <FontAwesomeIcon icon={faThList} />
                break;
            case "faDesktop":
                fontAwesomeIcon = <FontAwesomeIcon icon={faDesktop} />
                break;
            default:
                break;
        }        

    return (
        <div className="info-card">
            <div className="info-card-title">
                <h1>{fontAwesomeIcon} {title}</h1>
            </div>
            <hr></hr>
            <ul>
                {
                    Object.keys(skills).map(key => (
                        <li value={key}>{skills[key]}</li>
                    ))
                }
            </ul>
        </div>
    )
}
