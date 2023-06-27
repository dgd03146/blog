import React from 'react'
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import {} from 'twin.macro'
import { StyledLink } from './style'

// TODO: 실제 링크로 바꾸기
const SOCIAL_LINKS = [
  { href: '/github', icon: <FaGithub /> },
  { href: '/linkedin', icon: <FaLinkedinIn /> },
  { href: '/medium', icon: <FaMediumM /> },
]

const SocialNavigation = () => {
  return (
    <div tw="flex items-center gap-x-4">
      {SOCIAL_LINKS.map((link) => (
        <StyledLink key={link.href} href={link.href}>
          {link.icon}
        </StyledLink>
      ))}
    </div>
  )
}

export default SocialNavigation
