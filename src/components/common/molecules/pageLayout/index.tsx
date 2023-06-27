'use client'

import React from 'react'
import { useParams, usePathname } from 'next/navigation'
import {} from 'twin.macro'
import Divider from '@/components/common/atoms/divider'

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
            <h1 tw="font-indie">{pathname}</h1>
            <Divider />
          </>
        )}
        <div tw="py-10">{children}</div>
      </div>
    </>
  )
}

export default PageLayout
