import { CSSProperties } from 'react'
import { Metadata } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import PostDetail from '@/components/blog/organisms/postDetail'
import { getPost } from '@/service/notion'

type CSSPropertiesMap = { [key: string]: CSSProperties }

type TProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: TProps): Promise<Metadata> {
  const {
    post: { title, description },
  } = await getPost(slug)
  return {
    title,
    description,
  }
}

const BlogPost = async ({ params: { slug } }: TProps) => {
  const post = await getPost(slug)
  const codeStyle: CSSPropertiesMap | undefined = nord

  return (
    <PostDetail post={post}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={post.markdown}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return inline ? (
              <code {...props}>{children}</code>
            ) : match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                PreTag="div"
                {...props}
                style={codeStyle}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </PostDetail>
  )
}

export default BlogPost
