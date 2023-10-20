import React from 'react'
import './styles.css'
import Separator from '../separator/Separator'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='container project'>
      <div className='section-heading'>
        <div className='heading-two'>
          <p>Projects</p>
        </div>
        <Separator/>
      </div>
      <div className='sub-container-h'>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects