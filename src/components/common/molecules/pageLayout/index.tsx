'use client'

import React from 'react'
import { useParams, usePathname } from 'next/navigation'
import tw from 'twin.macro'
import Divider from '@/components/common/atoms/divider'
import { Heading1 } from '@/components/common/atoms/texts'
import { getPageName } from '@/utils/getPageName'
import TransitionEffect from '../transitionEffect'

const PageLayout = ({ children }: { children?: React.ReactNode }) => {
  const pathname = getPageName(usePathname())
  const params = useParams()
  const isNested = !!params.slug

  return (
    <>
      <TransitionEffect />
      <div tw="py-6">
        {!isNested && (
          <>
            <Heading1 text={pathname} />
            <Divider />
          </>
        )}
        <div tw="py-10">{children}</div>
      </div>
    </>
  )
}

export default PageLayout
