import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import './Contact.css'
import InputField from '../components/InputField'
import Modal from '../components/Modal'

export default function Contact() {

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const modalRef = React.useRef();    

  const openModal = () => {
    console.log('modalRef', modalRef)
    modalRef.current.openModal()
}

  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    const isUser = Object.values(userInfo).every(el => Boolean(el))
    isUser ? setIsDisabled(false) : setIsDisabled(true)
  }, [userInfo])

  function handleOnChange(input, name) {
    setUserInfo(prevState => ({ ...prevState, [name]: input }))
    console.log('signup', userInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios({
    //   method: 'POST',
    //   url: "http://localhost:3002/send",
    //   data: userInfo
    // }).then(res => {
    //   console.log('res.data.success', res.data.success)
    // })
    openModal()
    console.log('submit fired!!!')
  }

  return (
    <section id="contact" className="contact-img">
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
          <InputField id="name" name="name" type="text" placeholder="Name" onUpdateInput={handleOnChange} />
          <InputField id="email" name="email" type="email" placeholder="Email" onUpdateInput={handleOnChange} />
          <InputField id="subject" name="subject" type="text" placeholder="Subject" onUpdateInput={handleOnChange} />
          <InputField id="message" name="message" type="text" placeholder="Message" onUpdateInput={handleOnChange} />
          <button type="button" className={isDisabled ? "btn disabled" : "btn"} disabled={isDisabled} onClick={handleSubmit}>Send Message</button>
        </form>
        <Modal ref={modalRef}>
               <h1>Modal Header</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia placeat commodi libero tenetur ipsam itaque recusandae omnis rerum praesentium ducimus sed laborum, minima, exercitationem ullam facilis alias ut. Voluptates?</p>
        </Modal>
      </div>
      {/* <footer id="contact-footer">This is the footer</footer> */}
    </section >
  )
}