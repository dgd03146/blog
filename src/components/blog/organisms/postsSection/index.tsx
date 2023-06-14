'use client'

import React from 'react'
import tw from 'twin.macro'
import { TPost } from '@/types/post'
import Post from '../../molecules/post'

type TProps = {
  posts: TPost[]
}

const PostsSection = ({ posts }: TProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}

// FIXME: 적용할지 고려해보기 grid grid-cols-1 gap-x-6 gap-y-6 desktop:grid-cols-2

export default PostsSection
