'use client'

import React from 'react'
import tw from 'twin.macro'
import { TPost } from '@/types/post'
import Post from '../../molecules/post'
import { Container } from './style'

type TProps = {
  posts: TPost[]
}

const PostsSection = ({ posts }: TProps) => {
  return (
    <Container>
      <ul tw="mx-auto">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </Container>
  )
}

export default PostsSection
