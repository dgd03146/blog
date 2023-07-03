import React from 'react'
import Projects from '@/components/projects/organism/projects'
import { getAllPosts } from '@/service/notion'

const ProjectsPage = async () => {
  const posts = await getAllPosts()
  return <Projects projects={posts} />
}

export default ProjectsPage
