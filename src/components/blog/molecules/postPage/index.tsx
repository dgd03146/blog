'use client'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import remarkGfm from 'remark-gfm'
import tw from 'twin.macro'
import { TPostPage } from '@/types/post'
import { MarkDownWrapper } from './style'

type TProps = {
  post: TPostPage
}

const PostPage = ({ post }: TProps) => {
  return (
    <main tw="min-h-screen">
      <div tw="flex items-center justify-center">
        <MarkDownWrapper tw="prose prose-slate prose-img:rounded-md prose-h2:text-primary prose-code:before:content-none prose-code:after:content-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={post.markdown} />
        </MarkDownWrapper>
      </div>
    </main>
  )
}

export default PostPage

// const MarkDownCode = ({ value, language }) => {
//   return <SyntaxHighlighter language="javascript">{value}</SyntaxHighlighter>
// }
