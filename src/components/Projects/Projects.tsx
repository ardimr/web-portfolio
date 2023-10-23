import React from 'react'
import './styles.css'
import Separator from '../separator/Separator'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id= 'projects' className='container project'>
      <div className='section-heading'>
        <div className='heading-two'>
          <p>Projects</p>
        </div>
        <Separator/>
      </div>
      <div className='project-grid'>
        <ProjectCard src='/train.png' title='Train Booking System' techStacks={['golang.svg', 'postgresql.svg', 'redis.svg']}>
          <p>
            The Train Booking System is a simple yet powerful application for managing train reservations and bookings. 
            This application provides an easy and convenient way for users to search for available trains, book tickets, and manage their travel plans.
            This application is inspired by KAI's booking system (Indonesian Railways Company).
          </p>
        </ProjectCard>
        <ProjectCard src='/ppe.jpg' title='Personal Protective Equipment Inspection' techStacks={['python.png', 'opencv.svg', 'pytorch.svg']}>
          <p>
            PPE is equipment that will protect the user against the risk of accidents or of adverse effects on health. 
            It can include items such as safety helmets, gloves, eye protection, high-visibility clothing, safety footwear, safety harnesses and respiratory protective equipment (RPE).
          </p>
          <p>
            This application can automatically detect whether a worker is wearing the necessary PPE for a specific task or environment.
          </p>
        </ProjectCard>
        <ProjectCard src='/dagozilla.png' title='Dagozilla Soccer Robot' techStacks={['python.png', 'opencv.svg', 'pytorch.svg']}>
          <p>
            Dagozilla Soccer Robot is a mobile robot that can play soccer autonomously. The robot has holonomic movement and using sensors to get the environment (field) information. This robot relies on omnidirectional camera as the main sensor, supported by the other sensors such as rotary encoder and compass to recognize it’s position, orientation, velocity, and ball position. The robot also has dribbling and shooting shooting mechanism like a real footballer to create goals. In a national match, there are up to three robots can play together in a team using strategy.
          </p>
        </ProjectCard>
        
        <ProjectCard src='/PCB.png' title='PCB Inspection' techStacks={['python.png', 'opencv.svg', 'pytorch.svg']}>
          <p>
            The main idea of defect detection is comparing the inspected PCB and the template PCB to determine if there are any errors in the PCB being inspected. 
            The detection method utilizes binarization image processing modules, morphological operations, and image mathematical operations. 
            In the next stage, the detected defects can be classified using a machine learning model that is trained using a PCB defect type dataset.
          </p>
        </ProjectCard>
        <ProjectCard src='/ta.png' title='Moving Asset Tracking' techStacks={['python.png', 'opencv.svg', 'pytorch.svg']}>
        </ProjectCard>
      </div>
    </div>
  )
}

export default Projects