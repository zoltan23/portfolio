import React from 'react';
import './Card.css';

export default function Card({ title, description, link, github, url }) {
    console.log('github', github)
    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <p>{`${description}`}</p>
               
            </div>
            <div className="links">
                    <p>Url: <a href="#">{`${url}`}</a></p>
                    <p>Github: <a href={github}>{github}</a></p>
                </div>
        </div>
    )
}