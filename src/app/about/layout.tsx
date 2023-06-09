'use client'

import PageLayout from '@/components/common/molecules/pageLayout'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout text="About" children={children} />
}
