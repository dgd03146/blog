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
      <ul tw="flex flex-col w-full gap-y-[5rem]">
        {projects.map((project) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
