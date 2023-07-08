import React from 'react'
import { Metadata } from 'next'
import Contact from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send mail to Jung',
}

const ContactPage = () => {
  return <Contact />
}

export default ContactPage
