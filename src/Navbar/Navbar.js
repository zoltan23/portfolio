import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './Navbar.css';

export default function Navbar() {
    const offset = -60
    return (
        <>
                <nav className="navbar sticky">
                    <div className="navbar-left">Tim Tassin</div>
                    <ul className="navbar-right">
                        <Link className="nav-item" to="home" activeClassName="active" smooth={true} duration={1000}>Home</Link>
                        <Link className="nav-item" to="about" activeClassName="active" smooth={true} duration={1000} offset={offset}>About</Link>
                        <Link className="nav-item" to="projects" activeClassName="active" smooth={true} duration={1000} offset={offset}>Projects</Link>
                        <Link className="nav-item" to="knowledge" activeClassName="active" smooth={true} duration={1000} offset={offset}>Knowledge</Link>
                        <Link className="nav-item" to="contact" activeClassName="active" smooth={true} duration={1000} offset={offset}>Contact</Link>
                    </ul>
                </nav>
        </>
    )
}
