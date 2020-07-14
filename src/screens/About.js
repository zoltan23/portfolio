import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id="about" className="flex-columns">
            <h1>About Me</h1>
            <div className="row">
                <div className="column">
                    <div className="column-1">
                        Picture goes here!!!
                    </div>
                </div>
                <div className="column about-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus tenetur quae perferendis quos corrupti.</p>
                </div>
            </div>
            <hr></hr>
            <div className="table">
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
                            <td><a href="#">my Github</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
