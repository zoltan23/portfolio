import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id="about" className="img">
            <div className="">
            <div id="about-grid">
                <div id="about-header"><h1>About Me</h1></div>
                <div id="about-content1">
                    Picture goes here!!!
                </div>
                <div id="about-content2">
                    <p>I am currently a private tutor that specializes in mathematics and statistics.  I am currently working diligently to transition careers to a data scientist/analyst or software engineer.</p>
                    <p>I am looking for an opportunity to become a part of a team and develope professionally.  </p>
                    <p>In my spare time, I love to play guitar, trumpet and expand my programming skills to help me reach my goal of being a successful data scientist.</p>
                </div>
                <footer id="about-footer">
                    <table className="about-table">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>Tim Tassin</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>timothy_tassin@hotmail.com</td>
                            </tr>
                            <tr>
                                <td>Github:</td>
                                <td><a href="https://github.com/zoltan23">https://github.com/zoltan23</a></td>
                            </tr>
                        </tbody>
                    </table>
                </footer>
            </div>
            </div>
        </section>
    )
}
