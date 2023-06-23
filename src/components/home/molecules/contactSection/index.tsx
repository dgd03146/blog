import tw from 'twin.macro'
import ContactButton from '@/components/common/atoms/contactButton'
import SocialNavigation from '@/components/home/molecules/socialNavigation'

const ContactSection = () => {
  return (
    <div tw="flex gap-x-6 desktop:flex-col">
      <ContactButton text="Contact Me" href="/contact" />
      <SocialNavigation ismobile="true" />
    </div>
  )
}

export default ContactSection
