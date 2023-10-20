import React from 'react'
import './styles.css'
import TechStack from './TechStack'

const TechStackList = () => {
  return (
    <div className='tech-stack-list'>
      <TechStack>Tech Stack</TechStack>
      <TechStack>Tech</TechStack>
      <TechStack>Stack</TechStack>
      <TechStack>Tech Stack</TechStack>
    </div>
  )
}

export default TechStackList