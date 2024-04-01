"use client"
import React from 'react'
import './styles.css'
import Separator from '../separator/Separator'
import Button from '../button/Button'



const HeroContent = () => {
  const smoothScroll = (target:string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("element not found")
    }
  };

  return (
    <div className='wrapper'>
      <img src="/me-2.jpg" style={{borderRadius:"50%", width:"250px", height:"250px"}}/>
      <div className='title'>
        Rizky Ardi Maulana
      </div>
      <Separator/>
      <p>
        {`Hello! I'm Ardi👋, a passionate software engineer with a strong focus on backend development and a deep fascination for computer vision technologies. I thrive on turning innovative ideas into functional and user-friendly software solutions. My goal is to make a positive impact on the world through technology.`}
      </p>

      <div className='hero-cta'>
        <a
          href={`/document/Resume_Rizky Ardi Maulana.pdf`}
          // download="Rizky Ardi Maulana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button butonType='secondary'>Download CV</Button>
        </a>
        <Button butonType='secondary' onClick={() => smoothScroll('#projects')}>Projects</Button>       
      </div>
    </div>
  )
}

const Hero = () => {
  return  (
    <div id = 'hero' className='container' style={{scrollMarginTop:"var(--scroll-margin-top)"}}>
      <HeroContent />
    </div>
  )
}
export default Hero