import React from 'react'
import './styles.css'
import TechStack from './TechStack'

const TechStackList = () => {
  return (
    <div className='tech-stack-list'>
      <TechStack src='/golang.svg'/>
      <TechStack src='/postgresql.svg'/>
      <TechStack src='/mongodb.svg'/>
      <TechStack src='/redis.svg'/>
      <TechStack src='/rabbitmq.svg'/>
      <TechStack src='/html5.png'/>
      <TechStack src='/css.png'/>
      <TechStack src='/nextjs.svg'/>
      <TechStack src='/react.svg'/>
      <TechStack src='/typescript.svg'/>

      <TechStack src='/python.png'/>
      <TechStack src='/pytorch.svg'/>
      <TechStack src='/opencv.svg'/>
      <TechStack src='/docker.svg'/>

      {/* <TechStack>
      <TechStack> */}
    </div>
  )
}

export default TechStackList