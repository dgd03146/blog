'use client'

import React from 'react'
import { TNotionData } from '@/types/notion'
import {} from 'twin.macro'
import Project from './project'

type TProps = {
  projects: TNotionData[]
}

const Projects = ({ projects }: TProps) => {
  return (
    <section tw="flex justify-center mx-auto">
      <ul tw="flex flex-col gap-y-[5rem] laptop:gap-y-[5rem]">
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
