import React from 'react'
import Projects from '@/components/projects'
import { getAllProjects } from '@/service/notion'

export const revalidate = 3000

const ProjectsPage = async () => {
  const projects = await getAllProjects()
  return <Projects projects={projects} />
}

export default ProjectsPage
