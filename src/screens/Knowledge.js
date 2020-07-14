import React from 'react'
import './Knowledge.css'
import InfoCard from '../components/InfoCard'
import data from '../assets/skills_data.json'

export default function Knowledge() {
   return (
      <section className="container" id="knowledge">
         <h1>Knowledge</h1>
         <div className="knowledge-grid">
            {
               data.map(item => (
                  <InfoCard icon={item.icon} skills={item.skills} title={item.title} description={item.description} />
               ))}
         </div>
      </section>
   )
}
