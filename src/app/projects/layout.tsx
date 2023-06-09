import PageLayout from '@/components/common/molecules/pageLayout'

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageLayout text="Projects" children={children} />
    </>
  )
}
