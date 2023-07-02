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
        <div tw="flex flex-col-reverse justify-between w-full items-center mb-4 gap-x-4 laptop:flex-row">
          <div tw="w-full max-w-[455px] laptop:max-w-4xl laptop:w-fit">
            <Tags post={post} />
            <h1>{post.title}</h1>
            <h3 tw="font-medium">{post.description}</h3>
            <p tw="text-[14px] text-gray">{dayjs(post.date).format('LL')}</p>
          </div>
          <ImageWrapper tw="mb-6 w-full ml-0 h-[250px] tablet:h-[300px] laptop:ml-[3rem] laptop:mb-0 laptop:w-[300px] laptop:min-w-[300px] laptop:h-[250px]">
            <Image src={post.cover} alt="cover" fill />
          </ImageWrapper>
        </div>
      </Link>
    </PostContainer>
  )
}

export default Post
