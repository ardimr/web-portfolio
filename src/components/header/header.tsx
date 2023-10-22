"use client"
import React from 'react'
import Button from '../button/Button'

import './styles.css'

const Header = () => {
  const smoothScroll = (target:string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='container'>
      <div className='logo'>
        ARDIMR
      </div>
      <nav className='navbar'>
        <ul>
          <li>
            <a onClick={()=>smoothScroll('#hero')} href='#hero'>Home</a>
          </li>
          <li>
            <a onClick={()=>smoothScroll('#about')} href='#about'>About</a>
          </li>
          <li>
            <a onClick={()=>smoothScroll('#projects') } href='#projects'>Projects</a>
          </li>
          <li>
            <Button butonType='cta' onClick={()=>smoothScroll('#contact')}>
              Contact
            </Button>
          </li>
        </ul>
        
        
       
      </nav>
    </div>
  )
}

export default Header