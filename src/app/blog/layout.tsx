import { Metadata } from 'next'
import PageLayout from '@/components/common/layout/pageLayout'

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'About frontend blog posts',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout children={children} />
}
