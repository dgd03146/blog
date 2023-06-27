import React from 'react'
import Image from 'next/image'
import { TPost } from '@/types/post'
import { ImageWrapper } from './style'
import {} from 'twin.macro'

type TProps = {
  key: string
  project: TPost
}

const Project = ({ project, key }: TProps) => {
  return (
    <li key={key} tw="py-[1.5rem] px-[2rem] mb-6 w-full">
      <div tw="flex flex-col-reverse justify-between w-full items-center mb-4 gap-x-4 laptop:flex-row">
        <ImageWrapper tw="mb-6 w-full h-[300px] laptop:mb-0 laptop:w-full laptop:h-[400px]">
          <Image src={project.cover} alt="cover" fill />
        </ImageWrapper>
      </div>
    </li>
  )
}

export default Project
