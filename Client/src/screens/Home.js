import React from 'react'
import './Home.css'
import Typewriter from '../components/Typewriter'
import NavButton from '../components/NavButton';

export default function Home() {
    return (
        <section id="home" className="center img">
            <div className="container">
                <p>
                    Welcome!  My name is <br />
                    <span>Tim Tassin</span><br />
                    <Typewriter str="Thank you for visiting my portfolio website!" />
                </p>
                <NavButton to="about" caption="Learn more about me!"/>
            </div>
        </section>
    )
}

