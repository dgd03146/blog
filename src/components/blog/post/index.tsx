'use client'

import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import {} from 'twin.macro'

import Tags from '@/components/common/tags'
import { getRouteSlug } from '@/constants/route'

import { TNotionData } from '@/types/notion'
import { rgbDataURL } from '@/utils/getPlaceHolder'
import { ImageWrapper, PostContainer } from './style'

type TProps = {
  post: TNotionData
}

const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

const Post = ({ post }: TProps) => {
  return (
    <PostContainer>
      <Link href={getRouteSlug(post.slug)} className="group">
        <div tw="flex flex-col-reverse justify-between w-full laptop:flex-row">
          <div tw="flex flex-col w-full laptop:max-w-4xl laptop:w-fit gap-y-4">
            <Tags post={post} />
            <h1 tw="text-[2rem] group-hover:text-blue dark:group-hover:text-yellow">
              {post.title}
            </h1>
            <h2 tw="font-medium text-[1.3rem] text-green dark:text-light">
              {post.description}
            </h2>
            <p tw="text-[1rem] text-gray flex-1 flex items-end">
              {dayjs(post.date).format('LL')}
            </p>
          </div>
          <ImageWrapper tw="relative mb-6 w-full h-[250px] tablet:h-[300px] laptop:mb-0 laptop:w-[300px] laptop:min-w-[300px] laptop:h-[250px]">
            <Image
              src={post.cover}
              alt="cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={rgbDataURL(220, 220, 220)}
            />
          </ImageWrapper>
        </div>
      </Link>
    </PostContainer>
  )
}

export default Post
