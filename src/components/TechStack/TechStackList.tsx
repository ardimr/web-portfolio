import React from 'react'
import './styles.css'
import TechStack from './TechStack'

const TechStackList = () => {
  return (
    <div className='tech-stack-list'>
      <TechStack name='Golang' src='/golang.svg'/>
      <TechStack name='Python' src='/python.png'/>
      <TechStack name='Typescript' src='/typescript.svg'/>

      <TechStack name='PostgreSQL' src='/postgresql.svg'/>
      <TechStack name='MongoDB' src='/mongodb.svg'/>
      <TechStack name='Redis' src='/redis.svg'/>
      <TechStack name='RabbitMQ' src='/rabbitmq.svg'/>
      <TechStack name='Minio' src='/minio.svg'/>

      <TechStack name='NextJS' src='/nextjs.svg'/>
      <TechStack name='React' src='/react.svg'/>
      <TechStack name='HTML5' src='/html5.png'/>
      <TechStack name='CSS' src='/css.png'/>

      <TechStack name='Pytorch' src='/pytorch.svg'/>
      <TechStack name='OpenCV' src='/opencv.svg'/>
      <TechStack name='Git' src='/git.svg'/>
      <TechStack name='Docker' src='/docker.svg'/>
      <TechStack name='NginX' src='/nginx.svg'/>

      {/* <TechStack>
      <TechStack> */}
    </div>
  )
}

export default TechStackList