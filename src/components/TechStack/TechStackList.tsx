import React from 'react'
import './styles.css'
import TechStack from './TechStack'

const TechStackList = () => {
  return (
    <div className='tech-stack-grid'>
      <div className='tech-stack-card'>
        <div className='heading'>
          <p>Backend</p>
        </div>
        <div className='tech-stack-group'>
          <TechStack name='Golang' src='/golang.svg'/>
          <TechStack name='Python' src='/python.png'/>
          <TechStack name='PostgreSQL' src='/postgresql.svg'/>
          <TechStack name='MongoDB' src='/mongodb.svg'/>
          <TechStack name='Redis' src='/redis.svg'/>
          <TechStack name='RabbitMQ' src='/rabbitmq.svg'/>
          <TechStack name='Minio' src='/minio.svg'/>
        </div>
      </div>
      
      <div className='tech-stack-card'>
        <div className='heading'>
          <p>Frontend</p>
        </div>
        <div className='tech-stack-group'>
          <TechStack name='Typescript' src='/typescript.svg'/>
          <TechStack name='NextJS' src='/nextjs.svg'/>
          <TechStack name='React' src='/react.svg'/>
          <TechStack name='HTML5' src='/html5.png'/>
          <TechStack name='CSS' src='/css.png'/>
        </div>
      </div>
      
      <div className='tech-stack-card'>
        <div className='heading'>
          <p>DevOps</p>
        </div>
        
        <div className='tech-stack-group'>
          <TechStack name='Git' src='/git.svg'/>
          <TechStack name='Docker' src='/docker.svg'/>
          <TechStack name='NginX' src='/nginx.svg'/>
          <TechStack name='Kubernetes' src='/kubernetes.svg'/>
          <TechStack name='Google Cloud' src='/google-cloud.svg'/>
          <TechStack name='AWS' src='/aws.svg'/>
        </div>
      </div>

      {/* <TechStack name='Pytorch' src='/pytorch.svg'/>
      <TechStack name='OpenCV' src='/opencv.svg'/> */}

      {/* <TechStack>
      <TechStack> */}
    </div>
  )
}

export default TechStackList