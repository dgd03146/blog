import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import tw, { css } from 'twin.macro'
import { Heading2, Heading3, Paragraph } from '@/components/common/atoms/texts'
import { TPost, TTag } from '@/types/post'
import { ImageWrapper, PostContainer, Tag } from './style'

type TProps = {
  post: TPost
  key: string
}

const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)

// TODO: ATOMIC 디자인 나눠야함

const Post = ({ post, key }: TProps) => {
  return (
    <PostContainer tw="mb-6" key={key}>
      <Link href={`blog/${post.slug}`}>
        <div tw="flex flex-col-reverse justify-between w-full items-center mb-4 gap-x-4 laptop:flex-row">
          <div tw="w-full max-w-[455px] laptop:max-w-4xl laptop:w-fit">
            <div tw="flex gap-x-2 mb-4">
              {post.tags.map((tag: TTag) => (
                <Tag
                  tw="text-primary border-primary text-[14px] font-medium"
                  key={tag.id}
                >
                  {tag.name}
                </Tag>
              ))}
            </div>
            <h1>{post.title}</h1>
            <h3 tw="font-medium">{post.description}</h3>
            <Paragraph
              text={dayjs(post.date).format('LL')}
              cssStyle="text-[14px] text-gray"
            />
          </div>
          <ImageWrapper tw="mb-6 w-full ml-0 h-[300px] laptop:ml-[3rem] laptop:mb-0 laptop:w-[240px] laptop:h-[240px]">
            <Image src={post.cover} alt="cover" fill />
          </ImageWrapper>
        </div>
      </Link>
    </PostContainer>
  )
}

export default Post
