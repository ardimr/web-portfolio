import React from 'react'

interface Props {
  children?: React.ReactNode
  src?: string
  name: string
}
const TechStack = ({children, src, name}:Props) => {
  return (
    <div className='tech-stack-icon'>
      <img src={src} />
      <span className='tooltip'>{name}</span>
      {/* {children} */}
    </div>
  )
}

export default TechStack