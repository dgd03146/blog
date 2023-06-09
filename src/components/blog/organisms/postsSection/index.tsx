'use client'

import React from 'react'
import tw from 'twin.macro'

import Post from '../../molecules/post'

const PostsSection = () => {
  return (
    <>
      <ul tw="grid grid-cols-1 gap-x-6 gap-y-6 desktop:grid-cols-2">
        {/* TODO:배열 맵 돌려야함 */}
        <Post />
      </ul>
    </>
  )
}

export default PostsSection
