"use client"
import React, { useState } from 'react'
import Button from '../button/Button'

import './styles.css'

const Header = () => {
  const smoothScroll = (target:string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = () => {
    console.log(toggle, navbarLinkClass)
    setToggle(!toggle)

  }

  const navbarLinkClass = toggle? 'navbar-link active': 'navbar-link'
  return (
    <div className='container'>
      <nav className='navbar'>
        <ul>
          <li className='logo'>
            ARDIMR
          </li>
          <li className='navbar-toggle' onClick={handleToggle}>
            <img src='/burger-line.svg' width={35} height={35} />
          </li>
          <li className='navbar-link' >
            <a onClick={()=>smoothScroll('#hero')} href='#hero'>Home</a>
          </li>
          <li className={navbarLinkClass}>
            <a onClick={()=>smoothScroll('#about')} href='#about'>About</a>
          </li>
          <li className={navbarLinkClass}>
            <a onClick={()=>smoothScroll('#projects') } href='#projects'>Projects</a>
          </li>
          <li className={navbarLinkClass}>
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