import React from 'react'
import './Knowledge.css'
import InfoCard from '../components/InfoCard'

export default function Knowledge() {
   return (
      <div className="container">
         <div className="grid">
            <InfoCard icon="faHome" title="Full Stack Web Development" description="This is description 1" />
            <InfoCard icon="faHome" title="Data Analytics" description="This is description 2" />
            <InfoCard icon="faHome" title="Machine Learning" description="This is description 3" />
            <InfoCard icon="faHome" title="Title 4" description="This is description 4" />
         </div>
      </div>
   )
}
