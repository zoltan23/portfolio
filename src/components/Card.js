import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './Card.css';

export default function Card({ title, description, github, url }) {
    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <p>{`${description}`}</p>
            </div>
            <div className="links">
                {url ? <p>Url: <a href="#">{`${url}`}</a></p> : ''}
                <p>Github: <a href={github}><FontAwesomeIcon icon={faGithub} /></a></p>
            </div>
        </div>
    )
}