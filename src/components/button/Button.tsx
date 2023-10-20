import React from 'react'
import './styles.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  butonType : string
}

const Button = ({
  children,
  butonType,
  ...Props
}: Props) => {

  const className = `button ${butonType}`
  return (
    <button className={className} {...Props}>
      {children}
    </button>
  )
}

export default Button