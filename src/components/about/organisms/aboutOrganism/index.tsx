'use client'

import React from 'react'
import {} from 'twin.macro'

import ImageSection from '../../molecules/imageSection'
import Introduction from '../../molecules/introduction'
import ResumeSection from '../../molecules/resumeSection'
import TechStacks from '../../molecules/techStacks'

const AboutOrganism = () => {
  return (
    <section tw="max-w-[980px]">
      <div tw="flex gap-x-10 flex-col items-center laptop:flex-row">
        <div tw="flex items-center flex-col w-[50%]">
          <ImageSection />
        </div>
        <div tw="flex-1 flex flex-col justify-center">
          <Introduction />
          <ResumeSection />
        </div>
      </div>
      <TechStacks />
    </section>
  )
}

export default AboutOrganism
