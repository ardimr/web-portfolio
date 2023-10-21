import React from 'react'

interface Props {
  children?: React.ReactNode
  src?: string
}
const TechStack = ({children, src}:Props) => {
  return (
    <div className='tech-stack-icon'>
      <img src={src} />
      {/* {children} */}
    </div>
  )
}

export default TechStack