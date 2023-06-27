'use client'

import { PropsWithChildren } from 'react'

import {} from 'twin.macro'
import { TPostDetail } from '@/types/post'
import PostDetailInfo from '../../molecules/postDetailInfo'
import PostMarkdown from '../../molecules/postMarkdown'

type TProps = {
  post: TPostDetail
}

const PostDetail = ({ post, children }: PropsWithChildren<TProps>) => {
  return (
    <main tw="min-h-screen max-w-[980px] w-full">
      <PostDetailInfo post={post.post} />
      <PostMarkdown children={children} />
    </main>
  )
}

export default PostDetail
