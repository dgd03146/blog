import React from 'react'
import {} from 'twin.macro'
import ContactButton from '@/components/common/button/contactButton'
import SocialNavigation from '@/components/common/socialNavigation'
import { RESUME_URL } from '@/constants/url'

const ResumeSection = () => {
  return (
    <div tw="flex items-center gap-x-[1.5rem]">
      <ContactButton text="Resume" href={RESUME_URL} />
      <SocialNavigation />
    </div>
  )
}

export default ResumeSection
