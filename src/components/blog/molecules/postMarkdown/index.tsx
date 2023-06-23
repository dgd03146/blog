'use client'

import { ReactNode } from 'react'
import tw from 'twin.macro'
import { MarkDownWrapper } from './style'

const PostMarkdown = ({ children }: { children: ReactNode }) => {
  return (
    <div tw="flex items-center justify-center">
      <MarkDownWrapper tw="prose prose-slate prose-img:rounded-md prose-h1:text-primary prose-code:before:content-none prose-code:after:content-none">
        {children}
      </MarkDownWrapper>
    </div>
  )
}

export default PostMarkdown
