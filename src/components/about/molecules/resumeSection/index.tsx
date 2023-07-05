import React from 'react'
import {} from 'twin.macro'
import ContactButton from '@/components/common/atoms/contactButton'
import SocialNavigation from '@/components/common/molecules/socialNavigation'
import { RESUME_URL } from '@/constants/socialLink'

const ResumeSection = () => {
  return (
    <div tw="flex items-center gap-x-[1.5rem]">
      <ContactButton text="View Resume" href={RESUME_URL} />
      <SocialNavigation />
    </div>
  )
}

export default ResumeSection
