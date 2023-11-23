import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import Logo from '../../assets/Logo.png'

function Header() {

  return (
    <div className='header'>
        <div className="logo">
            {/* <img src = {Logo} alt="Logo" ></img> */}
            <p>logo</p>
        </div>

        <div className="categories">
            <Link to="/apiwork"><p alt='navCat' className='navCat'>API WORK</p></Link>

            <Link to="/styleWork"><p alt='navCat' className='navCat'>Style Work</p></Link>

            <Link to="/contact"><p alt='navCat' className='navCat'>Contact Me</p></Link>

        </div>
    </div>
  )
}

export default Header