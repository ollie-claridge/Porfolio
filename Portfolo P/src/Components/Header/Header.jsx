import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <h1>O.C PORT</h1>
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