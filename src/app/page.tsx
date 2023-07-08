import Hero from '@/components/home/hero'

export const metadata = {
  title: {
    default: 'JungLog',
    template: 'JungLog | %s',
  },
  description: `Frontend Developer Jung's DevLog`,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Page() {
  return (
    <div className="font-indie">
      <Hero />
    </div>
  )
}
