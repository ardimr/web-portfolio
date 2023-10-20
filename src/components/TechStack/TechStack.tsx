import React from 'react'

interface Props {
  children?: React.ReactNode
}
const TechStack = ({children}:Props) => {
  return (
    <div className='tech-stack-icon'>
      {children}
    </div>
  )
}

export default TechStack