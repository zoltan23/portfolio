import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-img">
      <div class="flex-columns">
        <div className="row">
          <h1>Contact Me!</h1>
        </div>
        <div class="row">
          <div class="column">
            <div class="column-1">
              <h1>Tim Tassin</h1>
              <h2>We provide bespoke solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <div className="contact-icons">
                <a href="https://www.linkedin.com/in/timothy-tassin/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/zoltan23"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="column-2">
              <form>
                <input type="text" placeholder="Name*" />
                <input type="email" placeholder="Email*" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Message" />
                <button className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}