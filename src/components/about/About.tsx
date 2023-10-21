import React from 'react'
import './styles.css'
import Separator from '../separator/Separator'
import TechStackList from '../TechStack/TechStackList'

const About = () => {
  return (
    <div id='about' className='container'>
      <div className='section-heading'>
        <div className='heading-two'>
          <p>About</p>
        </div>
        <Separator/>
      </div>
      <div className='body'>
        {/* <img src='/me-2.jpg' width={400} height={400}/> */}
        <div style={{display:"flex", flexDirection:"column", rowGap:"10px"}}>
          <p>
          Hello, I'm Ardi, an Electrical Engineering graduate from the Bandung Institute of Technology, where I received my degree in 2021. 
          I Finished my final project which focused on IoT (Internet of Things) solutions for monitoring vehicles.
          This project not only allowed me to apply my electrical engineering skills but also ignited my interest in the intersection of hardware and software.
          </p>
          <p>
          My journey as a tech enthusiast began during my college years, where I served as an embedded engineer for a robotic team.
          This hands-on experience introduced me to the world of C and C++ programming, 
          and I gained a deep understanding of the intricacies of working with hardware and software in tandem.
          </p>
          {/* <p>
          In 2020, I had the opportunity to have an internship as embedded engineer at Xirka. 
          This experience not only expanded my technical skills but also exposed me to the professional software development world.
          </p> */}
          <p>
          Later, my career took an exciting turn as I delved further into software development, with a primary focus on backend development and machine learning. 
          I discovered a profound fascination with software architecture and design, particularly in the realm of backend development.
          </p>
          <p>
          My journey in software development eventually led me to a strong background in machine learning,
          enabling me to deliver AI-driven solutions as part of my backend services.
          My knowledge in this field allows me to design intelligent systems that enhance the capabilities of applications, 
          making them more intuitive and efficient.
          </p>
          {/* <p>
          For the past two years, I've been working as a Computer Vision Engineer. 
          This role has provided me with invaluable experience in computer vision and image analysis, 
          enabling me to contribute to exciting projects and further my expertise in the field. 
          I've had the privilege of working with cutting-edge technology to develop innovative solutions.
          </p> */}
          <p>
          While my primary focus is backend development, I'm also skilled in frontend development. 
          These additional skills allow me to create holistic and well-rounded applications. 
          My versatility across the tech stack ensures I can engage in all aspects of a project.
          </p>
          <p>
          I'm passionate about leveraging technology to solve real-world problems, and I'm excited to collaborate on projects that align with my areas of expertise. 
          If you're looking for a dedicated, innovative, and well-rounded engineer and a keen interest in software development, AI, and computer vision, please feel free to get in touch. 
          I'm always eager to explore new opportunities and challenges.
          </p>
          <p>
          Thank you for visiting my portfolio, and I look forward to potentially working together on exciting ventures in the future.
          </p>
        </div>
      </div>
      <div className='section-heading'>
        <div className='heading-three'>
          <p>My Tech Stacks</p>
        </div>
        <Separator/>
      </div>
      <TechStackList />
    </div>
  )
}

export default About