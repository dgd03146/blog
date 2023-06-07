import tw from 'twin.macro'
import SocialNavigation from '@/components/molecules/navigations/socialNavigation'
import ProfileHeading from '@/components/molecules/profileHeading'
import ContactSection from '@/components/organisms/contactSection'
import ImageSection from '@/components/organisms/imageSection'

const HomeTemplate = () => {
  return (
    <div tw="flex items-center justify-center text-dark w-full laptop:min-h-[calc(100vh - 180px)] py-8 gap-x-20 flex-col-reverse  desktop:flex-row desktop:justify-between">
      <SocialNavigation isMobile={false} />
      <div tw="basis-[40]">
        <ProfileHeading />
        <ContactSection />
      </div>
      <ImageSection />
    </div>
  )
}

export default HomeTemplate
