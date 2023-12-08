import React from 'react'
import './Contact.css'
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <div className='contact-page'>
      <h1 className='contact-title'>Contacts</h1>
      <div className='my-links'>
        <div className="myLinks">
          <p><GrGithub /> GITHUB</p>
          <a>https://github.com/ollie-claridge</a>
        </div>
        <div className="myLinks">
          <p><FaLinkedin /> LINKED IN</p>
          <a>https://www.linkedin.com/in/oliver-claridge-3b5840296/</a>
        </div>
        <div className="myLinks">
          <p><CiMail /> Email</p>
          <p>ollie.claridge@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact