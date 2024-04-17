"use client"
import MarkdownComponent from '@/components/Markdown/Markdown'
import React from 'react'
import { projectData } from './ProjectData'


const MyProjects = ({ params }: { params: { slug: string } }) => {
 
  const {slug} = params
  const projectExists = projectData.find((project) =>project.title.replaceAll(' ', '-').toLowerCase() === slug)
  if (!projectExists) {
    return <h1 className='container'>404 Project not found</h1>
  }

  return (
    <div className='container'>
      <h1>{slug}</h1>
      <MarkdownComponent filepath={projectExists.path} />
    </div>
  )
}

export default MyProjects

