import React from 'react'
import './styles.css'
import TechStackList from '../TechStack/TechStackList'
import Image from 'next/image'
import TechStack from '../TechStack/TechStack'

export type TechStack = {
  name: string
  icon: string
}

export type ProjectLink = {
  icon: string
  type: string
  uri: string
}

interface Props {
  children?: React.ReactNode
  src: string
  title: string
  techStacks?: TechStack[]
  projectLinks? : ProjectLink[] 
}

const ProjectCard = ({
  children,
  src,
  title,
  techStacks,
  projectLinks

}:Props) => {
  return (
    <div className='project-card'>
      <div className='wireframe-placeholder'>
        <img src={src}></img>
      </div>
      <div className='heading-three'>
        <p>
          {title}
        </p>
        <div className='project-links'>
          {projectLinks?.map((projectLink:ProjectLink) =>
            (projectLink.type === 'url')
            ? <a key={projectLink.uri} href={projectLink.uri} >
              <img src={projectLink.icon} />
              <span className='tooltip'>Visit github</span>
              </a>
            : <a key = {projectLink.uri} href={projectLink.uri} 
                download={title}
                target="_blank"
                rel="noreferrer"
              >
                <img src={projectLink.icon} />
                <span className='tooltip'>Download the documentation</span>
              </a>
          )}
        </div>
      </div>
      <div className='separator'>
        <div className='line'/>
      </div>
      <div className='body'>
        {children}
      </div>
      <div style={{width:"100%", display:"flex", flexDirection:"row", gap:"25px", justifyContent:"center"}}>
        {techStacks?.map((techStack, index) => <TechStack key={index} name={techStack.name} src={techStack.icon}/>)}
      </div>
    </div>
  )
}

export default ProjectCard