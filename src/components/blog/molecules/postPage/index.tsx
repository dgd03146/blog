'use client'

import { CSSProperties } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import tw from 'twin.macro'
import { TPostPage } from '@/types/post'
import { formatDate } from '@/utils/formatDate'
import { Tag } from '../post/style'
import { MarkDownWrapper, ReactMarkDownWrapper } from './style'

type TProps = {
  post: TPostPage
}

type CSSPropertiesMap = { [key: string]: CSSProperties }

const PostPage = ({ post }: TProps) => {
  const codeStyle: CSSPropertiesMap | undefined = nord

  return (
    <main tw="min-h-screen max-w-[980px]">
      <div tw="flex flex-col items-center">
        {/* <Image width={200} height={200} /> */}
        <h1 tw="text-big mb-2">{post.post.title}</h1>
        <h2 tw="font-medium mb-2">{post.post.description}</h2>
        <p>{formatDate(post.post.date)}</p>
        <div tw="mt-2">
          {post.post.tags.map((tag) => (
            <Tag
              tw="text-primary border-primary text-[14px] font-medium"
              key={tag.id}
            >
              {tag.name}
            </Tag>
          ))}
        </div>
      </div>
      <div tw="flex items-center justify-center">
        <MarkDownWrapper tw="prose prose-slate prose-img:rounded-md prose-h1:text-primary prose-code:before:content-none prose-code:after:content-none">
          <ReactMarkDownWrapper
            remarkPlugins={[remarkGfm]}
            children={post.markdown}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return inline ? (
                  // 강조
                  <code
                    style={{
                      padding: '2px',
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                ) : match ? (
                  // 코드
                  // 언어가 선택됨
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                    style={codeStyle}
                  />
                ) : (
                  // 언어가 선택되지 않음
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        </MarkDownWrapper>
      </div>
    </main>
  )
}

export default PostPage

// const MarkDownCode = ({ value, language }) => {
//   return <SyntaxHighlighter language="javascript">{value}</SyntaxHighlighter>
// }
