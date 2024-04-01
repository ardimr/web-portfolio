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
        <ProjectCard 
          src='/paveview.png' 
          title='Paveview' 
          techStacks={[
            {name:"Golang", icon:"golang.svg"},
            {name: "Python", icon:"python.png"},
            {name:"PostgreSQL", icon:"postgresql.svg"},
            {name:"Redis", icon:"redis.svg"},
            {name:"OpenCV", icon:"opencv.svg"},
            {name:"Pytorch", icon:"pytorch.svg"},
            {name:"GCP", icon:"gcp.svg"}
          ]} 
          projectLinks={[
            ]
          }>
          <p>
            {`AI-based platform featuring Road Damage Detection (RDD) and Road Damage Evaluation (RDE), aligned with international standards such as the Pavement Condition Index (PCI) and Surface Distress Index (SDI).`}
          </p>
        </ProjectCard>
        <ProjectCard 
          src='/train.png' 
          title='Train Booking System' 
          techStacks={[
            {name:"Golang", icon:"golang.svg"},
            {name:"PostgreSQL", icon:"postgresql.svg"},
            {name:"Redis", icon:"redis.svg"},
            {name:"NextJS", icon:"nextjs.svg"},
            {name:"React", icon:"react.svg"},
            {name:"Typescript", icon:"typescript.svg"},
            {name:"CSS", icon:"css.png"}
          ]} 
          projectLinks={[
            {icon:"/github-icon.svg", type:"url",uri:"https://github.com/ardimr/train-booking-system"},
            ]
          }>
          <p>
            {`The Train Booking System is a simple yet powerful application for managing train reservations and bookings. 
            This application provides an easy and convenient way for users to search for available trains, book tickets, and manage their travel plans.
            This application is inspired by KAI's booking system (Indonesian Railways Company).`}
          </p>
        </ProjectCard>
        <ProjectCard
          src='/ppe.jpg' 
          title='Personal Protective Equipment Inspection' 
          techStacks={[
            {name:"Python", icon:"python.png"},
            {name:"PostgreSQL", icon:"postgresql.svg"},
            {name:"OpenCV", icon:"opencv.svg"},
            {name:"Pytorch", icon:"pytorch.svg"}
          ]} 
          projectLinks={[
            {icon:"link.svg", type:"document", uri:"document/ppe.pdf"}
          ]}>
          <p>
            {`PPE is equipment that will protect the user against the risk of accidents or of adverse effects on health. 
            It can include items such as safety helmets, gloves, eye protection, high-visibility clothing, safety footwear, safety harnesses and respiratory protective equipment (RPE).
            `}
          </p>
          <p>
            {`This application can automatically detect whether a worker is wearing the necessary PPE for a specific task or environment.`}
          </p>
        </ProjectCard>
        <ProjectCard 
          src='/ta.png' 
          title='Moving Asset Tracking'
          projectLinks={[
            {icon:"link.svg", type:"document", uri:"document/moving_asset_tracking.pdf"}
          ]}

          >
            <p>
              {`
              The problem encountered by the shipping company is the limitation in monitoring logistics vehicles in the form of motorcycles. 
              To overcome this problem, a motorcycle monitoring system and courier driving behavior were designed. 
              The monitoring system is divided into two aspects, namely hardware and software. 
              Hardware is embedded in the motorcycle that serves to obtain monitoring data from the motorcycle. 
              The software resides in the cloud that functions to store, process further, and display data.
              `}
            </p>
        </ProjectCard>
        <ProjectCard 
          src='/mata-duitan.jpg' 
          title='Mata Duitan Payment System' 
          techStacks={[
            {name:"NodeJS", icon:"nodejs.svg"},
            {name:"MongoDB", icon:"mongodb.svg"},
            {name:"Python", icon:"python.png"}
          ]}
          projectLinks={[
            {icon:"github-icon.svg", type:"url", uri:"https://github.com/ariefhirmanto/final-task-pplj"},
            {icon:"link.svg", type:"document", uri:"document/mata_duitan.pdf"}
          ]}>
          <p>
            {`
            e-wallet such as Paypal, Gopay, Link-Aja, and OVO is a growing digital payment. E-wallet uses the internet as a communication line. 
            In order to fulfill Network Software Designing course final project, I and my teammate were inspired to create similar application. The application we designed is called “Mata Duitan” and is a simplified version of the existing e-wallet. 
            The system designed will use a server as a payment data processor and the user who wants to make a transaction will be considered a client.
            `}
          </p>
        </ProjectCard>
        <ProjectCard 
          src='/PCB.png' 
          title='PCB Inspection' 
          techStacks={[
            {name:"Python", icon:"python.png"},
            {name:"Pytroch", icon:"pytorch.svg"},
            {name:"OpenCV", icon:"opencv.svg"},
          ]} 
          projectLinks={[
            {icon:"link.svg", type:'document', uri:"document/pcb_inspection.pdf"}
          ]}
          >
          <p>
            {`The main idea of defect detection is comparing the inspected PCB and the template PCB to determine if there are any errors in the PCB being inspected. 
            The detection method utilizes binarization image processing modules, morphological operations, and image mathematical operations. 
            In the next stage, the detected defects can be classified using a machine learning model that is trained using a PCB defect type dataset.`}
          </p>
        </ProjectCard>
        
        <ProjectCard 
          src='/dagozilla.png' 
          title='Dagozilla Soccer Robot' 
          projectLinks={[
            {icon:"link.svg", type:"document", uri:"document/dagozilla.pdf"}
          ]} 
          >
          <p>
            {`Dagozilla Soccer Robot is a mobile robot that can play soccer autonomously. 
            The robot has holonomic movement and using sensors to get the environment (field) information. 
            This robot relies on omnidirectional camera as the main sensor, supported by the other sensors such as rotary encoder and compass to recognize it’s position, orientation, velocity, and ball position. 
            The robot also has dribbling and shooting shooting mechanism like a real footballer to create goals. In a national match, there are up to three robots can play together in a team using strategy.`}
          </p>
        </ProjectCard>
        
      </div>
    </div>
  )
}

export default Projects