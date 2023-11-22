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
            <Link to="/apiwork"><p className='navCat'>About</p></Link>

            <p className='navCat'>Projects </p>

            <p className='navCat'>Contact</p>

        </div>
    </div>
  )
}

export default Header