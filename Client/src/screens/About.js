import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id="about" className="img">
            <div className="container">
            <div id="about-grid">
                <div id="about-header"><h1>About Me</h1></div>
                <div id="about-content1">
                    Picture goes here!!!
                </div>
                <div id="about-content2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti.</p>
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
