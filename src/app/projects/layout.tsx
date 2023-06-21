import PageLayout from '@/components/common/molecules/pageLayout'

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageLayout children={children} />
    </>
  )
}
