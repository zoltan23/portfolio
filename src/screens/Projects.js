import React from 'react'
import Card from '../components/Card'
import './Projects.css'
import data from '../assets/portfolio_data.json'

export default function Projects() {
    console.log('data', data)
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {
                    data.map(item => (
                        <Card title={item.title} url={item.url} description={item.description} github={item.github} />
                    ))}
            </div>
        </section>
    )
}