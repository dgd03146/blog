import tw from 'twin.macro'
import ContactButton from '@/components/atoms/buttons/contactButton'
import SocialNavigation from '@/components/molecules/navigations/socialNavigation'

const ContactSection = () => {
  return (
    <div tw="flex gap-x-6 desktop:flex-col">
      <ContactButton text="Contact Me" href="/contact" />
      <SocialNavigation ismobile={true} />
    </div>
  )
}

export default ContactSection
