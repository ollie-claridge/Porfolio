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
      <p>Well, I hope you will consider me for this course because I have been learning to code for about a 
        year now and have been fitting it around my full-time job. I did complete course with Mimo-Dev this 
        year which was was good but it didn't really explain or assist as much as I had hoped. However it has 
        left me with a keen thirst to break into the industry. I imagine that after going over everything again 
        and gaining some fresh insight, I will be more than ready for the working world. Especially with how I've 
        read your course is "intense" and that sounds right up my street. It would would make sense to make it intense 
        if you were planning on putting the students to work upon completion which I mention because I'm very interested 
        in the part of the program that helps the students find their way to jobs. Without a degree, it is quite difficult 
        to find a job in this field, not impossible. I'm sure I could if I kept digging, but I feel I'm still a bit rough 
        around the edges and would like a chance to improve my skills where I can. I hope to eventually be able to work aboard 
        and work and travel simultaneously, I understand that is a long way off and i'll have to gain a lot of experience and 
        skill but I'll be happy to work in or out the office for a few years at least until I can reach that point. I'm just 
        excited to start this journey and can't wait to here back from you, thank you.</p>
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