import React from 'react'
import './styles.css'
import TechStackList from '../TechStack/TechStackList'
import Image from 'next/image'
import TechStack from '../TechStack/TechStack'

interface Props {
  children?: React.ReactNode
  src: string
  title: string
  techStacks: string[]
}

const ProjectCard = ({
  children,
  src,
  title,
  techStacks

}:Props) => {
  return (
    <div className='project-card'>
      <div className='wireframe-placeholder'>
        <img src={src}></img>
      </div>
      <div className='heading-three'>{title}</div>
      <div className='separator'>
        <div className='line'/>
      </div>
      <div className='body'>
        {children}
      </div>
      <div style={{width:"100%", display:"flex", flexDirection:"row", gap:"25px", justifyContent:"center"}}>
        {techStacks.map((techStack, index) => <TechStack key={index} src={techStack}/>)}
      </div>
      <div className='project-links'>
        <a href='http://www.github.com/ardimr' >
          <img src='/static/github-icon.png' />
        </a>    
      </div>
    </div>
  )
}

export default ProjectCard