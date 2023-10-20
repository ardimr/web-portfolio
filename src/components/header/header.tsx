import React from 'react'
import styles from './styles.module.css'
import Button from '../button/Button'

const Header = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        NAME
      </div>
      <div className={styles['navbar']}>
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <Button butonType='cta'>
          Contact
        </Button>
      </div>
    </div>
  )
}

export default Header