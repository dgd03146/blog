import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import {} from 'twin.macro'
import { TPost } from '@/components/blog/types/post'
import Tags from '@/components/common/molecules/tags'
import { ROUTE_SLUG } from '@/constants/route'
import { ImageWrapper, PostContainer } from './style'

type TProps = {
  post: TPost
  key: string
}

const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

const Post = ({ post, key }: TProps) => {
  return (
    <PostContainer key={key}>
      <Link href={ROUTE_SLUG('blog', post.slug)}>
        <div tw="flex flex-col-reverse justify-between w-full laptop:flex-row">
          <div tw="flex flex-col w-full max-w-[455px] laptop:max-w-4xl laptop:w-fit gap-y-4">
            <Tags post={post} />
            <h1>{post.title}</h1>
            <h2 tw="font-medium text-green">{post.description}</h2>
            <p tw="text-[1rem] text-gray flex-1 flex items-end">
              {dayjs(post.date).format('LL')}
            </p>
          </div>
          <ImageWrapper tw="mb-6 w-full h-[250px] tablet:h-[300px] laptop:mb-0 laptop:w-[300px] laptop:min-w-[300px] laptop:h-[250px]">
            <Image src={post.cover} alt="cover" fill />
          </ImageWrapper>
        </div>
      </Link>
    </PostContainer>
  )
}

export default Post
