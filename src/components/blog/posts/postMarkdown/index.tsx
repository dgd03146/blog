'use client'

import { ReactNode } from 'react'
import {} from 'twin.macro'
import { MarkDownWrapper } from './style'

const PostMarkdown = ({ children }: { children: ReactNode }) => {
  return (
    <div tw="flex items-center justify-center">
      <MarkDownWrapper tw="prose prose-slate prose-img:rounded-md prose-h1:text-blue  dark:prose-h1:text-yellow dark:prose-h2:text-light dark:prose-li:text-light dark:prose-ol:text-light prose-p:text-dark dark:prose-p:text-light prose-code:before:content-none prose-code:after:content-none max-w-[100%]">
        {children}
      </MarkDownWrapper>
    </div>
  )
}

export default PostMarkdown
