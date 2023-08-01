import { Metadata } from 'next'
import PageLayout from '@/components/common/layout/pageLayout'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send mail to Jung',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout children={children} />
}
