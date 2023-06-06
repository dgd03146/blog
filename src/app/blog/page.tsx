'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import tw, { styled } from 'twin.macro'
import { Heading1, Heading3, Paragraph } from '@/components/atoms/texts'

const Blog = () => {
  return (
    <ul tw="grid grid-cols-2 gap-x-6 gap-y-6">
      <PostContainer>
        <div>
          <Paragraph
            text="Category"
            cssStyle="text-red-700 font-medium text-[14px] mb-2"
          />
          <Heading1
            text="Titletitletilttileeeeeeeeeeeeeeeeee"
            cssStyle="mb-2 text-[32px]"
          />
          <Heading3 text="Subtitle" cssStyle="mb-8" />
          <div tw="flex justify-between text-gray ">
            <Link href="/" tw="flex items-center text-gray">
              <Paragraph text="read more" cssStyle="text-[14px]" />
              <IoIosArrowForward tw="text-[14px]" />
            </Link>
            <Paragraph text="Apr 22, 2023" cssStyle="text-[14px]" />
          </div>
        </div>
      </PostContainer>
      <PostContainer>
        <div>
          <Paragraph text="Category" cssStyle="text-red-700 font-medium" />
          <Heading1 text="Title" cssStyle="mb-2" />
          <Heading3 text="Subtitle" cssStyle="mb-2" />
          <Link href="/" tw="flex items-center text-gray">
            <Paragraph text="read more" />
            <IoIosArrowForward />
          </Link>
        </div>
      </PostContainer>
      <PostContainer>
        <div>
          <Paragraph text="Category" cssStyle="text-red-700 font-medium" />
          <Heading1 text="Title" cssStyle="mb-2" />
          <Heading3 text="Subtitle" cssStyle="mb-4" />
          <Link href="/" tw="flex items-center text-gray">
            <Paragraph text="read more" />
            <IoIosArrowForward />
          </Link>
        </div>
      </PostContainer>
    </ul>
  )
}

export default Blog

const PostContainer = styled.li`
  padding: 2rem;
  border-radius: 24px;

  ${tw`bg-light`}

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  transition: background-color, box-shadow 0.2s ease-in-out;
`

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`
