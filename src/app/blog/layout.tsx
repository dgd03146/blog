'use client'

import PageLayout from '@/components/molecules/pageLayout'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout text="Blog" children={children} />
}
