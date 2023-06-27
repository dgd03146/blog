'use client'

import React from 'react'
import {} from 'twin.macro'
import { TPost } from '@/types/post'
import Post from '../../molecules/post'

type TProps = {
  posts: TPost[]
}

const Posts = ({ posts }: TProps) => {
  return (
    <section tw="flex justify-center max-w-[980px] mx-auto">
      <ul tw="flex flex-col mx-auto min-w-fit laptop:w-[92%] gap-y-[3rem]">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  )
}

export default Posts
