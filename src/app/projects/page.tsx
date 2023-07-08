import React from 'react'
import Projects from '@/components/projects'
import { getAllProjects } from '@/service/notion'

const ProjectsPage = async () => {
  const posts = await getAllProjects()
  return <Projects projects={posts} />
}

export default ProjectsPage
