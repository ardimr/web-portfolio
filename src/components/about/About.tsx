import React from 'react'
import './styles.css'
import Separator from '../separator/Separator'
import TechStackList from '../TechStack/TechStackList'

const About = () => {
  return (
    <div className='container'>
      <div className='section-heading'>
        <div className='heading-two'>
          <p>About</p>
        </div>
        <Separator/>
      </div>
      <div className='body'>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
        </div>
      </div>
      <TechStackList />
    </div>
  )
}

export default About