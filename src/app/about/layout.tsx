import { Metadata } from 'next'
import PageLayout from '@/components/common/molecules/pageLayout'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Introduction about Jung',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout children={children} />
}
