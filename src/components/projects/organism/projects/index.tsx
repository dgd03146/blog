'use client'

import React from 'react'
import { TPost } from '@/types/post'
import {} from 'twin.macro'
import Project from '../../molecule/project'

// FIXME: TPost를 Projects로 바꿔야함

type TProps = {
  projects: TPost[]
}

const Projects = ({ projects }: TProps) => {
  return (
    <section tw="flex justify-center max-w-[980px] mx-auto">
      <ul tw="flex flex-col mx-auto laptop:w-[92%] gap-y-[5rem]">
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects