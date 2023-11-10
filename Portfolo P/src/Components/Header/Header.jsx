import React from 'react'
import './Header.css'
// import Logo from '../../assets/Logo.png'

function Header() {

  return (
    <div className='header'>
        <div className="logo">
            {/* <img src = {Logo}></img> */}<p>logo</p>
        </div>

        <div className="categories">
            <p className='navCat'>About</p>
            <p className='navCat'>Projects </p>
            <p className='navCat'>Contact</p>
        </div>
    </div>
  )
}

export default Header