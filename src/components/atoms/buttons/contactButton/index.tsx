import React from 'react'
import Link from 'next/link'
import { RiSendPlaneFill } from 'react-icons/ri'
import Button from '..'

type TProps = {
  text: 'Contact Me' | 'View Resume'
  href: '/contact' | '/resume'
}

const ContactButton = ({ text, href }: TProps) => {
  return (
    <Button cssStyle="flex items-center gap-x-2 p-4 bg-dark text-light rounded-lg my-4 justify-center hover:text-gray">
      <Link href={href}>{text}</Link>
      <RiSendPlaneFill />
    </Button>
  )
}

export default ContactButton
