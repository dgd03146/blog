import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { RiShareBoxFill, RiGithubFill } from 'react-icons/ri'
import { TPost } from '@/components/blog/types/post'
import Tags from '@/components/common/molecules/tags'
import { rgbDataURL } from '@/utils/getPlaceHolder'
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
    <li
      key={key}
      tw="flex flex-col gap-x-[5rem] justify-between w-full laptop:flex-row"
    >
      <ImageWrapper tw="w-full mb-6 h-[300px] tablet:h-[400px] laptop:mb-0 laptop:h-[250px] laptop:w-[350px]">
        <Image
          src={project.cover}
          alt="cover"
          fill
          placeholder="blur"
          blurDataURL={rgbDataURL(237, 181, 6)}
        />
      </ImageWrapper>
      <div tw="basis-[0] flex flex-col gap-y-4 tablet:basis-[50%]">
        <h2>{project.title}</h2>
        <p tw="font-medium">
          {project.description}a car rental website is an online platform that
          allows users to rend cars for personal or business use. The website
          provides an interface for searching.
        </p>
        {/* <p tw="text-[14px] text-gray">{dayjs(project.date).format('LL')}</p> */}
        <Tags project={project} />
        <div tw="flex flex-1 items-center gap-x-8">
          <button
            tw="flex items-center text-h3 font-medium gap-x-1"
            className="group"
          >
            <span tw="group-hover:text-blue dark:group-hover:text-yellow">
              Code
            </span>
            <RiGithubFill tw="group-hover:text-blue dark:group-hover:text-yellow" />
          </button>
          <button
            tw="flex items-center text-h3 font-medium gap-x-1"
            className="group"
          >
            <span tw="group-hover:text-blue dark:group-hover:text-yellow">
              Live Demo
            </span>
            <RiShareBoxFill tw="group-hover:text-blue dark:group-hover:text-yellow" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Project
