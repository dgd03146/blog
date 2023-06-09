import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import tw from 'twin.macro'
import { Paragraph } from '@/components/common/atoms/texts'

const ReadMore = () => {
  return (
    <div tw="flex justify-between text-gray ">
      <Link href="/" tw="flex items-center text-gray">
        <Paragraph text="read more" cssStyle="text-[0.875rem]" />
        <IoIosArrowForward tw="text-[0.875rem]" />
      </Link>
      <Paragraph text="Apr 22, 2023" cssStyle="text-[14px]" />
    </div>
  )
}

export default ReadMore
