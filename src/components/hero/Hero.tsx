import React from 'react'
import './styles.css'
import Separator from '../separator/Separator'
import Button from '../button/Button'

const HeroContent = () => {
  return (
    <div className='wrapper'>
      <div className='title'>
        <div>Developer Name</div>
      </div>
      <Separator/>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
      </div>

      <div className='hero-cta'>
        <Button butonType='secondary'>Projects</Button>
        <Button butonType='primary'>Projects</Button>
      </div>

    </div>
  )
}

const Hero = () => {
  return  (
    <div className='container'>
      <HeroContent />
    </div>
  )
}
export default Hero