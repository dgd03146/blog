'use client'

import React from 'react'
import { TPost } from '@/types/post'
import {} from 'twin.macro'
import Project from '../../molecule/project'

// FIXME: Projects로 바꿔야함

type TProps = {
  projects: TPost[]
}

const ProjectsSection = ({ projects }: TProps) => {
  return (
    <section tw="flex justify-center max-w-[980px] mx-auto">
      <ul tw="mx-auto min-w-fit laptop:min-w-[740px]">
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
