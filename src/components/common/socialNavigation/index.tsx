import React from 'react'
import Link from 'next/link'

import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import tw from 'twin.macro'
import { GITHUB_URL, LINKEDIN_URL, MIDEUM_URL } from '@/constants/url'

const SOCIAL_LINKS = [
  { href: GITHUB_URL, icon: <FaGithub /> },
  { href: LINKEDIN_URL, icon: <FaLinkedinIn /> },
  { href: MIDEUM_URL, icon: <FaMediumM /> },
]

const SocialNavigation = () => {
  return (
    <div tw="flex justify-center items-center gap-x-6 ">
      {SOCIAL_LINKS.map((link) => (
        <Link key={link.href} href={link.href}>
          <span
            css={[
              tw`mb-0 text-[2rem]`,

              tw`hover:text-gray text-dark dark:text-light`,
            ]}
          >
            {link.icon}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default SocialNavigation
