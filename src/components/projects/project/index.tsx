import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Tags from '@/components/common/tags'
import { TNotionData } from '@/types/notion'
import { rgbDataURL } from '@/utils/getPlaceHolder'
import ButtonLink from '../buttonLink'
import { ImageWrapper } from './style'
import {} from 'twin.macro'

type TProps = {
  key: string
  project: TNotionData
}

const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

const Project = ({ project, key }: TProps) => {
  return (
    <li
      key={key}
      tw="flex flex-col gap-x-[5rem] justify-between w-full laptop:flex-row"
    >
      <ImageWrapper tw="w-full mb-6 h-[300px] tablet:h-[400px] laptop:mb-0 laptop:h-[350px] laptop:w-[350px] laptop:min-w-[350px]">
        <Image
          src={project.cover}
          alt="cover"
          fill
          placeholder="blur"
          blurDataURL={rgbDataURL(237, 181, 6)}
        />
      </ImageWrapper>
      <div tw="flex flex-col w-full max-w-[455px] laptop:max-w-4xl laptop:w-fit gap-y-4">
        {/* <div tw="basis-[0] flex flex-col gap-y-6 tablet:basis-[50%]"> */}
        <h1 tw="text-[1.8rem] text-blue dark:text-yellow">{project.title}</h1>
        <p tw="font-medium">{project.description}</p>
        <Tags project={project} />
        <ButtonLink githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </div>
    </li>
  )
}

export default Project
