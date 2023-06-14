import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
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
        <div tw="flex justify-between items-center mb-4 gap-x-4">
          <div tw="max-w-4xl">
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
            <Heading2 text={post.title} cssStyle="mb-2.5 text-[22px]" />
            <Heading3 text={post.description} cssStyle="mb-4 text-[0.875rem]" />
            <Paragraph
              text={dayjs(post.date).format('LL')}
              cssStyle="text-[14px] text-gray"
            />
          </div>
          <ImageWrapper>
            <Image src={post.cover} alt="cover" fill />
          </ImageWrapper>
        </div>
      </Link>
    </PostContainer>
  )
}

export default Post
