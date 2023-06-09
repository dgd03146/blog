import React from 'react'
import ReadMore from '@/components/blog/molecules/readMore'
import { Heading2, Heading3, Paragraph } from '@/components/common/atoms/texts'
import { PostContainer } from './style'

const Post = () => {
  return (
    <PostContainer>
      <div>
        <Paragraph
          text="Category"
          cssStyle="text-primary font-medium text-[14px] mb-4"
        />
        <Heading2
          text="Titletitletilttileeeeeeeeeeeeeeeeee"
          cssStyle="mb-4 text-[1.5rem]"
        />
        <Heading3 text="Subtitle" cssStyle="mb-4 text-[1rem]" />
        <ReadMore />
      </div>
    </PostContainer>
  )
}

export default Post
