'use client'

import React from 'react'
import tw from 'twin.macro'
import Divider from '@/components/common/atoms/divider'
import { Heading1 } from '@/components/common/atoms/texts'
import TransitionEffect from '../transitionEffect'

const PageLayout = ({
  text,
  children,
}: {
  text: 'Home' | 'About' | 'Blog' | 'Projects' | 'Contact'
  children: React.ReactNode
}) => {
  return (
    <>
      <TransitionEffect />
      <div tw="py-6">
        <Heading1 text={text} />
        <Divider />
        <div tw="py-10">{children}</div>
      </div>
    </>
  )
}

export default PageLayout
