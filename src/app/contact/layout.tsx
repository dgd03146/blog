import PageLayout from '@/components/common/molecules/pageLayout'

export default function ContactLayout({
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
