import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { RiShareBoxFill, RiGithubFill } from 'react-icons/ri'
import { TPost } from '@/components/blog/types/post'
import Tags from '@/components/common/molecules/tags'
import { ImageWrapper } from './style'
import {} from 'twin.macro'

type TProps = {
  key: string
  project: TPost
}

const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

const Project = ({ project, key }: TProps) => {
  return (
    <li key={key} tw="w-full max-h-[250px]">
      <div tw="flex gap-x-[5rem] justify-between">
        <ImageWrapper tw="mb-6 w-full h-[200px] laptop:mb-0 laptop:w-full laptop:h-[250px]">
          <Image src={project.cover} alt="cover" fill />
        </ImageWrapper>
        <div tw="basis-[50%] flex flex-col items-center gap-y-4">
          <h2>{project.title}</h2>
          <p tw="font-medium">
            {project.description}a car rental website is an online platform that
            allows users to rend cars for personal or business use. The website
            provides an interface for searching.
          </p>
          {/* <p tw="text-[14px] text-gray">{dayjs(project.date).format('LL')}</p> */}
          <Tags project={project} />
          <div tw="flex items-center gap-x-8">
            <button tw="flex items-center text-h3 font-medium">
              <span>code</span>
              <RiGithubFill />
            </button>
            <button tw="flex items-center text-h3 font-medium">
              <span>Live Demo</span>
              <RiShareBoxFill />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Project
