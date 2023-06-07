'use client'

import React from 'react'
import tw from 'twin.macro'
import ContactButton from '@/components/atoms/buttons/contactButton'
import { Heading3 } from '@/components/atoms/texts'
import SocialNavigation from '@/components/molecules/navigations/socialNavigation'
import TransitionEffect from '@/components/molecules/transitionEffect'
import ImageSection from '@/components/organisms/imageSection'
import TechStackSection from '@/components/organisms/techStackSection'
import { ABOUT_ME } from '@/constants/about'

const About = () => {
  // TODO: 아토믹 디자인으로 컴포넌트 나누기
  return (
    <>
      <TransitionEffect />
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
      <TechStackSection />
    </>
  )
}

export default About
