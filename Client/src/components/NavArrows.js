import React from 'react'
import { Link } from "react-scroll/modules";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '../../node_modules/@fortawesome/free-solid-svg-icons'
import './NavArrows.css'


export default function NavArrows({ toUp, toDown, captionUp, captionDown }) {

    return (
        <div className="arrows">
            <Link to={toUp} className="link" activeClass="active" spy={true} smooth={true} duration={1000} offset={-60}>{captionUp}<span><FontAwesomeIcon className="font-awesome" icon={faArrowUp} /></span></Link>
            <Link to={toDown} className="link" activeClass="active" spy={true} smooth={true} duration={1000} offset={-60}>{captionDown}<span><FontAwesomeIcon className="font-awesome" icon={faArrowDown} /></span></Link>
        </div>
    )
}
