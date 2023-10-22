import React from 'react'
import './styles.css'

const Footer = () => {
  return (
    <div className='container'>
      {/* <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", gap:"25px"}}> */}
      <div className='socials-wrapper'>
        {/* <div style={{width:"30px", height:"30px", borderRadius:"50%", background:"black"}} />
        <div style={{width:"30px", height:"30px", borderRadius:"50%", background:"black"}} />
        <div style={{width:"30px", height:"30px", borderRadius:"50%", background:"black"}} />
        <div style={{width:"30px", height:"30px", borderRadius:"50%", background:"black"}} />
        <div style={{width:"30px", height:"30px", borderRadius:"50%", background:"black"}} /> */}
        <a href='https://github.com/ardimr' style={{width:"fit-content", height:"fit-content"}}>
          <img src='/github-icon.svg' width={30} height={30} />    
        </a>
        <a href='www.linkedin.com/in/ardimr'>
          <img src='/linkedin.svg' width={30} height={30}/>
        </a>
        <a href='https://medium.com/@ardimr'>
          <img src='/medium.svg' width={30} height={30} />
        </a>
      </div>
    </div>
  )
}

export default Footer