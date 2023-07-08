import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { RiShareBoxFill, RiGithubFill } from 'react-icons/ri'
import { TPost } from '@/components/blog/types/post'
import Tags from '@/components/common/tags'
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
      tw="flex flex-col gap-x-[5rem] justify-between w-full laptop:flex-row max-h-[350px]"
    >
      <ImageWrapper tw="w-full mb-6 min-h-[300px] tablet:h-[400px] laptop:mb-0 laptop:h-[350px] laptop:w-[350px]">
        <Image
          src={project.cover}
          alt="cover"
          fill
          placeholder="blur"
          blurDataURL={rgbDataURL(237, 181, 6)}
        />
      </ImageWrapper>
      <div tw="basis-[0] flex flex-col gap-y-6 tablet:basis-[50%]">
        <h1 tw="text-[1.8rem] text-blue dark:text-yellow">{project.title}</h1>
        <p tw="font-medium">{project.description}</p>
        {/* <p tw="text-[14px] text-gray">{dayjs(project.date).format('LL')}</p> */}
        <Tags project={project} />
        <div tw="flex  gap-x-8">
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
