'use client'

import React from 'react'
import {} from 'twin.macro'

import ImageSection from './imageSection'
import Introduction from './introduction'
import ResumeSection from './resumeSection'
import TechStacks from './techStacks'

const About = () => {
  return (
    <section tw="max-w-[980px]">
      <div tw="flex gap-x-10 flex-col items-center laptop:flex-row">
        <ImageSection />
        <div tw="flex-1 flex flex-col justify-center">
          <Introduction />
          <ResumeSection />
        </div>
      </div>
      <TechStacks />
    </section>
  )
}

export default About
