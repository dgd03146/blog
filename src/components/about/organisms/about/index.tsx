'use client'

import React from 'react'
import {} from 'twin.macro'
import ContactButton from '@/components/common/atoms/contactButton'
import SocialNavigation from '@/components/common/molecules/socialNavigation'
import { ABOUT_ME } from '@/constants/about'
import { RESUME_URL } from '@/constants/socialLink'
import ImageSection from '../../molecules/imageSection'
import TechStacks from '../../molecules/techStacks'

const About = () => {
  return (
    <section tw="max-w-[980px]">
      <div tw="flex gap-x-10 flex-col items-center laptop:flex-row">
        <div tw="flex items-center flex-col w-[50%]">
          <ImageSection />
        </div>
        <div tw="flex-1 flex flex-col justify-center">
          {ABOUT_ME.map((it) => (
            <div key={it}>
              <h3>{it}</h3>
              <br />
            </div>
          ))}
          <div tw="flex items-center gap-x-[1.5rem]">
            <ContactButton text="View Resume" href={RESUME_URL} />
            <SocialNavigation />
          </div>
        </div>
      </div>
      <TechStacks />
    </section>
  )
}

export default About
