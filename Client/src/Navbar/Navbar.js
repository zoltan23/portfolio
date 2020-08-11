import React from 'react';
import './Navbar.css';
import Burger from './Burger';

export default function Navbar() {
    
    return (
        <>
                <nav className="navbar sticky">
                    <div className="navbar-left">Tim Tassin</div>
                <Burger />
                </nav>
        </>
    )
}
