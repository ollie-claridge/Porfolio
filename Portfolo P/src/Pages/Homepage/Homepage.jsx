import React from 'react'
import './Homepage.css'
import FS from '../../assets/FakeStoreHP.png'


function Homepage() {
  return (
    <div className="Homepage">
      <div className="intro">
          <div className='Job-title'>
          <div className='Job-title1'>Software Developer</div>
          <div className='Job-title2'>Specializing in Front-end Development</div>
          </div>
    </div>
    
    <div className="ps">
      <h2 className='about-title'>About me</h2>
      <p>blah blah blah</p>
    </div>

    <div className="example2">
      {/* <img src = {UL} className="SHexample"/> */}
    </div>
    <div className="example3">
    <div className="example-info">

    </div>
    </div>
    <div className="example4">
    <div className="example-info"> 

    </div>
    </div>
    <div className="example5">
    <div className="example-info"> 
    </div>
      
    </div>
    </div>

  )
}

export default Homepage