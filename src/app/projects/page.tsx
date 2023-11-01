import React from 'react'
import Projects from '@/components/projects'
import { getAllProjects } from '@/service/notion'

const ProjectsPage = async () => {
  const projects = await getAllProjects()
  return <Projects projects={projects} />
}

export default ProjectsPage
