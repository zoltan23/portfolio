import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                This is a card.
                </div>
            <div className="card-body">
                <p>{`${props.description}`}</p>
                <p>Url: <a href="#">{`${props.link}`}</a></p>
                <p>Github: <a href="#">{`${props.link}`}</a></p>
            </div>
        </div>
    )
}