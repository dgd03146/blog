'use client'

import React from 'react'
import tw from 'twin.macro'
import ContactButton from '@/components/common/atoms/contactButton'
import { Heading3 } from '@/components/common/atoms/texts'
import ImageSection from '@/components/common/molecules/imageSection'
import SocialNavigation from '@/components/home/molecules/socialNavigation'
import { ABOUT_ME } from '@/constants/about'
import TechStacks from '../../molecules/techStacks'

const AboutSection = () => {
  return (
    <>
      <div tw="flex gap-x-10 flex-col items-center laptop:flex-row">
        <div tw="flex items-center flex-col w-[50%]">
          <ImageSection />
        </div>
        <div tw="flex-1 flex flex-col justify-center">
          {ABOUT_ME.map((it) => (
            <div key={it}>
              <Heading3 text={it} />
            </div>
          ))}
          <div tw="flex items-center gap-x-4">
            <ContactButton text="View Resume" href="/resume" />
            <SocialNavigation ismobile={true} isabout={true} />
          </div>
        </div>
      </div>
      <TechStacks />
    </>
  )
}

export default AboutSection
