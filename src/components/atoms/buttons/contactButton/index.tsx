import React from 'react'
import Link from 'next/link'
import { RiSendPlaneFill } from 'react-icons/ri'
import Button from '..'

const ContactButton = () => {
  return (
    <Button cssStyle="flex items-center gap-x-2 p-4 bg-dark text-light rounded-lg my-4 w-[150px] justify-center hover:text-gray">
      <Link href="/contact">Contact Me</Link>
      <RiSendPlaneFill />
    </Button>
  )
}

export default ContactButton
