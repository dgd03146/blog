'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {} from 'twin.macro'

import { getPageName } from '@/utils/getPageName'
import TransitionEffect from '../transitionEffect'

const PageLayout = ({ children }: { children?: React.ReactNode }) => {
  const pathname = getPageName(usePathname())
  // const params = useParams()
  // const isNested = !!params.slug

  return (
    <>
      <TransitionEffect />
      <div>
        <h1 tw="text-[2rem] mt-[52px] mb-[32px]">{pathname || 'Blog'}</h1>
        <div tw="py-4  mx-auto">{children}</div>
      </div>
    </>
  )
}

export default PageLayout
