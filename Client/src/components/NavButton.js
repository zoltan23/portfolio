import React from 'react'
import { Link } from "react-scroll/modules";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faArrowDown } from '../../node_modules/@fortawesome/free-solid-svg-icons'
import './NavButton.css'

export default function NavButton({to, caption}) {
    return (
        <Link  className="link1" to={to} activeClass="active" spy={true} smooth={true} duration={1000} offset={-60}>{caption}<span><FontAwesomeIcon icon={faArrowDown} /></span></Link>
    )
}

