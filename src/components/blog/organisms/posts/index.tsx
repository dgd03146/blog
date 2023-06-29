'use client'

import React from 'react'
import {} from 'twin.macro'
import { TPost } from '@/components/blog/types/post'
import Post from '../../molecules/post'

type TProps = {
  posts: TPost[]
}

const Posts = ({ posts }: TProps) => {
  return (
    <section tw="flex justify-center mx-auto">
      <ul tw="flex flex-col w-full gap-y-[3rem]">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  )
}

export default Posts
