'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import tw, { styled } from 'twin.macro'
import { Heading2, Heading3, Paragraph } from '@/components/atoms/texts'
import TransitionEffect from '@/components/molecules/transitionEffect'

// TODO: Atomic으로 나누기

const Blog = () => {
  return (
    <>
      <TransitionEffect />
      <ul tw="grid grid-cols-1 gap-x-6 gap-y-6 desktop:grid-cols-2">
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
            <div tw="flex justify-between text-gray ">
              <Link href="/" tw="flex items-center text-gray">
                <Paragraph text="read more" cssStyle="text-[0.875rem]" />
                <IoIosArrowForward tw="text-[0.875rem]" />
              </Link>
              <Paragraph text="Apr 22, 2023" cssStyle="text-[14px]" />
            </div>
          </div>
        </PostContainer>
        <PostContainer>
          <div>
            <Paragraph text="Category" cssStyle="text-primary font-medium" />
            <Heading2 text="Title" cssStyle="mb-2" />
            <Heading3 text="Subtitle" cssStyle="mb-2" />
            <Link href="/" tw="flex items-center text-gray">
              <Paragraph text="read more" />
              <IoIosArrowForward />
            </Link>
          </div>
        </PostContainer>
        <PostContainer>
          <div>
            <Paragraph text="Category" cssStyle="text-primary font-medium" />
            <Heading2 text="Title" cssStyle="mb-2" />
            <Heading3 text="Subtitle" cssStyle="mb-4" />
            <Link href="/" tw="flex items-center text-gray">
              <Paragraph text="read more" />
              <IoIosArrowForward />
            </Link>
          </div>
        </PostContainer>
      </ul>
    </>
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
