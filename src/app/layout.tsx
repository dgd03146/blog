import { Indie_Flower, Montserrat } from '@next/font/google'
import { Metadata } from 'next'
import Footer from '@/components/common/layout/footer'
import Header from '@/components/common/layout/header'
import Toast from '@/components/common/toast'

import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import '@/styles/global.css'

export const metadata: Metadata = {
  title: {
    default: 'JungLog',
    template: 'JungLog | %s',
  },
  description: `Frontend Developer Jung's DevLog`,
  icons: {
    icon: '/favicon.ico',
  },
}

const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-indie',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${montserrat.className} ${indie.variable} ${montserrat.variable}`}
      >
        <body>
          <Providers>
            <Toast />
            <main className="h-screen w-full min-h-screen flex flex-col">
              <Header />
              <div className="mx-auto  laptop:min-w-[980px] max-w-[980px] pt-[90px] flex-[1]">
                <div className="mx-auto ">{children}</div>
              </div>
              <Footer />
            </main>
          </Providers>
        </body>
      </html>
    </StyledComponentsRegistry>
  )
}
