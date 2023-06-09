'use client'

import tw from 'twin.macro'
import TransitionEffect from '@/components/common/molecules/transitionEffect'
import ProfileHeading from '@/components/home/molecules/profileHeading'
import SocialNavigation from '@/components/home/molecules/socialNavigation'
import ContactSection from '@/components/home/organisms/contactSection'
import ImageSection from '@/components/home/organisms/imageSection'

const HomeTemplate = () => {
  return (
    <>
      <TransitionEffect />
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

export default HomeTemplate
