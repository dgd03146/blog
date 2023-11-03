import React from 'react'
import Projects from '@/components/projects'
import { getProjects } from '@/service/notion'

export const revalidate = 21600 // revalidate at most every hour

const ProjectsPage = async () => {
  const projects = await getProjects()
  return <Projects projects={projects} />
}

export default ProjectsPage
