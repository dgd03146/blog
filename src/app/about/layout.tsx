'use client'

import PageLayout from '@/components/molecules/pageLayout'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout text="About" children={children} />
}
