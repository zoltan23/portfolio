import React from 'react'
import Card from '../components/Card'
import './Projects.css'
import data from '../assets/portfolio_data.json'

export default function Projects() {
    console.log('data', data)
    return (
        <div className="container">
            {
                data.map(item => (
                    <Card link={item.link} description={item.description} />
                ))}
        </div>
    )
}
