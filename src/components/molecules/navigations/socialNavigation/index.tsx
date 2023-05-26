import React from 'react'
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import tw from 'twin.macro'
import { StyledLink } from './style'

type TProps = {
  isMobile: boolean
}

// TODO: 실제 링크로 바꾸기
const SOCIAL_LINKS = [
  { href: '/github', icon: <FaGithub /> },
  { href: '/linkedin', icon: <FaLinkedinIn /> },
  { href: '/medium', icon: <FaMediumM /> },
]

const SocialNavigation = ({ isMobile }: TProps) => {
  return (
    <div
      css={[
        isMobile
          ? tw`flex items-center gap-x-4 desktop:hidden`
          : tw`basis-[20] hidden desktop:block`,
      ]}
    >
      {SOCIAL_LINKS.map((link) => (
        <StyledLink key={link.href} href={link.href} isMobile={isMobile}>
          {link.icon}
        </StyledLink>
      ))}
    </div>
  )
}

export default SocialNavigation
