import React from 'react'
import Separator from '../separator/Separator'

const Contact = () => {
  return (
    <div id='contact' className='container contact'>
      <div className='section-heading'>
        <div className='heading-two'>
          <p>Contact</p>
        </div>
        <Separator/>
      </div>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"10px"}}>
        <span style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"10px"}}>
          <img src='/location.svg' width={30} height={30} />
          <p>
            Jakarta, Indonesia
          </p>
        </span>
        <span style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"10px"}}>
          <img src='/mail.svg' width={30} height={30} />
          <p>rizkyardimaulana@gmail.com</p>
        </span>
      </div>
    </div>
  )
}

export default Contact