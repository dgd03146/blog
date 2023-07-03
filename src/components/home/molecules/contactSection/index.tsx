import {} from 'twin.macro'
import ContactButton from '@/components/common/atoms/contactButton'
import SocialNavigation from '@/components/common/molecules/socialNavigation'

const ContactSection = () => {
  return (
    <div tw="flex gap-x-6 desktop:flex-col">
      <ContactButton text="Contact Me" href="/contact" />
      <SocialNavigation />
    </div>
  )
}

export default ContactSection
