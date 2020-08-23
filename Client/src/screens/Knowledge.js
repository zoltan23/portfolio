import React from 'react'
import InfoCard from '../components/InfoCard'
import data from '../assets/skills_data.json'
import './Knowledge.css'

export default function Knowledge() {
   return (
      <section id="knowledge">
         <div id="knowledge-container">
            <div id="knowledge-header"><h1>Knowledge</h1></div>
            <div id="content" className="knowledge-grid">
               {
                  data.map(item => (
                     <InfoCard icon={item.icon} skills={item.skills} title={item.title} description={item.description} />
                  ))}
            </div>
         </div>
      </section>
   )
}
