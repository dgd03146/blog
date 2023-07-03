import { Metadata } from 'next'
import PageLayout from '@/components/common/molecules/pageLayout'

export const metadata: Metadata = {
  title: 'All Projects',
  description: 'About my projects',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout children={children} />
}
