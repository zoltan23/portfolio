import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import './Contact.css'

export default function Contact() {

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleOnChange = (e) => {
    const { target: { name, value, id } } = e
    setUserInfo(prevState => ({ ...prevState, [name]: value }))
    console.log('signup', userInfo)
  }

  const handleSubmit = (e) => {
    axios({
      method: 'POST',
      url:"http://localhost:3002/send",
      data: userInfo
    }).then(res => {
      console.log('res.data.success', res.data.success)
    })
  }


  return (
    <section id="contact" className="contact-grid contact-img">
      <div id="contact-header"><h1>Contact Me!</h1></div>
      <div id="contact-content1">
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
      <div id="contact-content2">
        <form >
          <input id="name" name="name" type="text" placeholder="Name*" onChange={handleOnChange} />
          <input id="email" name="email" type="email" placeholder="Email*" onChange={handleOnChange} />
          <input type="text" name="subject" placeholder="Subject" onChange={handleOnChange} />
          <input type="text" name="message" placeholder="Message" onChange={handleOnChange} />
          <button className="btn" onClick={handleSubmit}>Send Message</button>
        </form>
      </div>
      <footer id="contact-footer">This is the footer</footer>
    </section >
  )
}