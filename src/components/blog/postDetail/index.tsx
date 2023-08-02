'use client'

import { PropsWithChildren } from 'react'

import {} from 'twin.macro'
import Giscus from '@/components/giscus'
import { TPostDetail } from '@/types/notion'
import PostDetailInfo from '../postDetailInfo'
import PostMarkdown from '../postMarkdown'

type TProps = {
  post: TPostDetail
}

const PostDetail = ({ post, children }: PropsWithChildren<TProps>) => {
  return (
    <main tw="min-h-screen max-w-[980px] w-[92%] laptop:w-[100%] mx-auto">
      <PostDetailInfo post={post.post} />
      <PostMarkdown children={children} />
      <Giscus />
    </main>
  )
}

export default PostDetail
