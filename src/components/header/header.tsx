"use client"
import React from 'react'
import styles from './styles.module.css'
import Button from '../button/Button'

const Header = () => {
  const smoothScroll = (target:string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        ARDIMR
      </div>
      <nav className={styles['navbar']}>
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
            <Button butonType='cta'>
              Contact
            </Button>
          </li>
        </ul>
        
        
       
      </nav>
    </div>
  )
}

export default Header