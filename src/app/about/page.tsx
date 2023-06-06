'use client'

import React from 'react'
import tw from 'twin.macro'
import ContactButton from '@/components/atoms/buttons/contactButton'
import { Heading3 } from '@/components/atoms/texts'
import SocialNavigation from '@/components/molecules/navigations/socialNavigation'
import ImageSection from '@/components/organisms/imageSection'
import TechStackSection from '@/components/organisms/techStackSection'
import { ABOUT_ME } from '@/constants/about'

const About = () => {
  // FIXME: Home이랑 겹치는거 같기도하고.. Tech Stack도 넣자.
  return (
    <>
      <div tw="py-10 flex gap-x-10 flex-col items-center laptop:flex-row">
        <div tw="flex items-center flex-col w-[50%]">
          <ImageSection />
        </div>
        <div tw="flex-1 flex flex-col justify-center">
          <Heading3 text={ABOUT_ME} />
          <div tw="flex items-center gap-x-4">
            <ContactButton text="View Resume" href="/resume" />
            <SocialNavigation ismobile={true} isabout={true} />
          </div>
        </div>
      </div>
      <TechStackSection />
    </>
  )
}

export default About
