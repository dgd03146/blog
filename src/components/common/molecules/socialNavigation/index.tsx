import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import tw from 'twin.macro'

// TODO: 실제 링크로 바꾸기
const SOCIAL_LINKS = [
  { href: '/github', icon: <FaGithub /> },
  { href: '/linkedin', icon: <FaLinkedinIn /> },
  { href: '/medium', icon: <FaMediumM /> },
]

const SocialNavigation = () => {
  const pathname = usePathname()

  const isabout = pathname === '/about' ? 'true' : 'false'

  return (
    <div tw="flex justify-center items-center gap-x-8 ">
      {SOCIAL_LINKS.map((link) => (
        <Link key={link.href} href={link.href}>
          <span
            css={[
              tw`mb-0 text-[2rem]`,
              isabout === 'true'
                ? tw`hover:text-gray text-dark`
                : tw`hover:text-yellow text-light`,
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
