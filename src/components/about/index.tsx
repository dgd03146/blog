'use client'

import React from 'react'
import {} from 'twin.macro'

import Introduction from './introduction'
import ResumeSection from './resumeSection'
import TechStacks from './techStacks'

const About = () => {
  return (
    <section tw="max-w-[980px]">
      <Introduction />
      {/* <div tw="flex gap-x-10 flex-col items-center laptop:flex-row">
        <ImageSection />
        <Hero />
      </div> */}
      <div tw=" flex flex-col gap-y-2 mb-8 laptop:flex-row items-center justify-center gap-x-12">
        <ResumeSection />
      </div>
      <TechStacks />
    </section>
  )
}

export default About
