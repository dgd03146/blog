'use client'

import { PropsWithChildren } from 'react'

import tw from 'twin.macro'
import { TPostPage } from '@/types/post'
import PostMarkdown from '../../molecules/postMarkdown'
import PostPageInfo from '../../molecules/postPageInfo'

type TProps = {
  post: TPostPage
}

const PostPage = ({ post, children }: PropsWithChildren<TProps>) => {
  return (
    <main tw="min-h-screen max-w-[980px]">
      <PostPageInfo post={post.post} />
      <PostMarkdown children={children} />
    </main>
  )
}

export default PostPage
