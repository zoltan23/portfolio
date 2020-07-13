import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <Route>
                <nav className="navbar">
                    <div className="navbar-left">Tim Tassin</div>
                    <ul className="navbar-right">
                        <NavLink className="nav-item" to="/home" activeClassName="active">Home</NavLink>
                        <NavLink className="nav-item" to="/about" activeClassName="active">About</NavLink>
                        <NavLink className="nav-item" to="/projects" activeClassName="active">Projects</NavLink>
                        <NavLink className="nav-item" to="/knowledge" activeClassName="active">Knowledge</NavLink>
                        <NavLink className="nav-item" to="/portfolio" activeClassName="active">Contact Me</NavLink>
                    </ul>
                </nav>
            </Route>
        </>
    )
}
