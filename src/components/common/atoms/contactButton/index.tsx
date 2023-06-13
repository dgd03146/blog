import React from 'react'
import Link from 'next/link'
import { RiSendPlaneFill } from 'react-icons/ri'
import Button from '../button'

type TProps = {
  text: 'Contact Me' | 'View Resume'
  href: '/contact' | '/resume'
}

const ContactButton = ({ text, href }: TProps) => {
  return (
    <Button className="my-4 flex w-fit items-center justify-center gap-x-2 rounded-lg bg-dark p-4 text-light hover:text-gray">
      <Link href={href}>{text}</Link>
      <RiSendPlaneFill />
    </Button>
  )
}

export default ContactButton
