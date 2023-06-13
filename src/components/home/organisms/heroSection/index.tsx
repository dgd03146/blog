'use client'

import tw from 'twin.macro'
import ImageSection from '@/components/common/molecules/imageSection'
import ContactSection from '@/components/home/molecules/contactSection'
import ProfileHeading from '@/components/home/molecules/profileHeading'
import SocialNavigation from '@/components/home/molecules/socialNavigation'

const HeroSection = () => {
  return (
    <>
      <div tw="flex items-center justify-center text-dark w-full laptop:min-h-[calc(100vh - 180px)] py-8 gap-x-20 flex-col-reverse  desktop:flex-row desktop:justify-between">
        <SocialNavigation ismobile={false} />
        <div tw="basis-[40]">
          <ProfileHeading />
          <ContactSection />
        </div>
        <ImageSection />
      </div>
    </>
  )
}

export default HeroSection
