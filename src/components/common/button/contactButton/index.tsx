import React from 'react'
import Link from 'next/link'
import { RiSendPlaneFill } from 'react-icons/ri'

import {} from 'twin.macro'

type TProps = {
  text: 'Contact Me' | 'Get my CV'
  href: string
}

const ContactButton = ({ text, href }: TProps) => {
  return (
    <button
      tw="my-4 flex w-fit items-center justify-center gap-x-2 rounded-lg bg-blue dark:bg-green p-4 text-primaryYellow dark:text-yellow"
      className="group"
    >
      <Link
        className="group-hover:text-yellow dark:group-hover:text-emerald"
        href={href}
      >
        {text}
      </Link>
      <RiSendPlaneFill tw="group-hover:text-yellow dark:group-hover:text-emerald" />
    </button>
  )
}

export default ContactButton
