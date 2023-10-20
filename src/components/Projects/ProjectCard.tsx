import React from 'react'
import './styles.css'
import TechStackList from '../TechStack/TechStackList'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className='project-card'>
      <div className='wireframe-placeholder'/>
      <div className='heading-three'>Project Title</div>
      <div className='separator'>
        <div className='line'/>
      </div>
      <div className='body'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
      </div>
      <TechStackList />
      <div className='project-links'>
        <a href='http://www.github.com/ardimr' >
          <img src='/static/github-icon.png' />
        </a>    
      </div>
    </div>
  )
}

export default ProjectCard