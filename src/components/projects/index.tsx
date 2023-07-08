'use client'

import React from 'react'
import { TProject } from '@/components/blog/types/post'
import {} from 'twin.macro'
import Project from './project'

// FIXME: TPost를 Projects로 바꿔야함

type TProps = {
  projects: TProject[]
}

const Projects = ({ projects }: TProps) => {
  return (
    <section tw="flex justify-center mx-auto">
      <ul tw="flex flex-col gap-y-[22rem] laptop:gap-y-[5rem]">
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
