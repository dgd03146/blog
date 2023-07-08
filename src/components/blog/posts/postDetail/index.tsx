'use client'

import { PropsWithChildren } from 'react'

import {} from 'twin.macro'
import { TPostDetail } from '@/components/blog/types/post'
import PostMarkdown from '../postMarkdown'
import PostDetailInfo from './postDetailInfo'

type TProps = {
  post: TPostDetail
}

const PostDetail = ({ post, children }: PropsWithChildren<TProps>) => {
  return (
    <main tw="min-h-screen max-w-[980px] w-[92%] mx-auto">
      <PostDetailInfo post={post.post} />
      <PostMarkdown children={children} />
    </main>
  )
}

export default PostDetail
