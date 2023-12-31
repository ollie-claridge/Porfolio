import React from 'react'
import './Contact.css'
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <div className='contact-page'>
      <h1 className='contact-title'>Contact Info:</h1>
      <div className='my-links'>
        <div className="myLinks">
          <p><GrGithub /> GITHUB</p>
          <a href="https://github.com/ollie-claridge" target="_blank">https://github.com/ollie-claridge</a>
        </div>
        <div className="myLinks">
          <p><FaLinkedin /> LINKED IN</p>
          <a href="https://www.linkedin.com/in/oliver-claridge-3b5840296/" target="_blank">https://www.linkedin.com/in/oliver-claridge-3b5840296/</a>
        </div>
        <div className="myLinks">
          <p><CiMail /> Email</p>
          <a href="mailto:ollie.claridge@gmail.com">ollie.claridge@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact