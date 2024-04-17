"use client"
import MarkdownComponent from '@/components/Markdown/Markdown'
import React from 'react'

const MyProjects = ({ params }: { params: { slug: string } }) => {
 
  const {slug} = params

  return (
    <div className='container'>
      <h1>{slug}</h1>
      <MarkdownComponent filepath='/md/sample.md' />
    </div>
  )
}

export default MyProjects

