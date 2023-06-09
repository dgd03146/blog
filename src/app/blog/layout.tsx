import PageLayout from '@/components/common/molecules/pageLayout'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageLayout text="Blog" children={children} />
    </>
  )
}
