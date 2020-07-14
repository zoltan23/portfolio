import React from 'react'
import Card from '../components/Card'
import './Projects.css'
import data from '../assets/portfolio_data.json'

export default function Projects() {
    console.log('data', data)
    return (
        <section id="projects">
            <div>
            <h1>Projects</h1>
            </div>
            <div className="projects-grid">
                {
                    data.map(item => (
                        <Card link={item.link} description={item.description} />
                    ))}
            </div>
        </section>
    )
}