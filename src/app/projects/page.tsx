import React from 'react'
import ProjectsSection from '@/components/projects/organism/projectsSection'
import { getAllPosts } from '@/service/notion'

const Porfolio = async () => {
  const posts = await getAllPosts()
  return <ProjectsSection projects={posts} />
}

export default Porfolio
