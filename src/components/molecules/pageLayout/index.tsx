import React from 'react'
import tw from 'twin.macro'
import Divider from '@/components/atoms/divider'
import { BigText } from '@/components/atoms/texts'

const PageLayout = ({
  text,
  children,
}: {
  text: 'Home' | 'About' | 'Articles' | 'Projects' | 'Contact'
  children: React.ReactNode
}) => {
  return (
    <div tw="py-6">
      <BigText text={text} />
      <Divider />
      {children}
    </div>
  )
}

export default PageLayout
