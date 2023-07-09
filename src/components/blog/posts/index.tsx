'use client'

import React from 'react'
import {} from 'twin.macro'
import { TNotionData } from '@/types/notion'
import Post from '../post'

type TProps = {
  posts: TNotionData[]
}

const Posts = ({ posts }: TProps) => {
  return (
    <section tw="flex justify-center mx-auto">
      <ul tw="flex flex-col w-full gap-y-[5rem]">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  )
}

export default Posts
