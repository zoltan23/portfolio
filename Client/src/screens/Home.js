import React from 'react'
import './Home.css'
import Typewriter from '../components/Typewriter'
import { Link, animateScroll as scroll } from "react-scroll/modules";

export default function Home() {
    return (
        <section id="home" className="center img">
            <div className="container">
                <p>
                    Welcome!  My name is <br />
                    <span>Tim Tassin</span><br />
            <Typewriter str="Thank you for visiting my portfolio website!" />
            </p>
            <Link className="nav-item" to="about" activeClass="active" spy={true} smooth={true} duration={1000} offset={-60}>About</Link>
            </div>
        </section>
    )
}

