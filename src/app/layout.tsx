import { Indie_Flower, Montserrat } from '@next/font/google'
import Toast from '@/components/common/molecules/toast'
import Header from '@/components/common/organisms/header'
import StyledComponentsRegistry from '@/lib/registry'
import '@/styles/global.css'

export const metadata = {
  title: 'JungLog',
  description: `Jung's DevLog`,
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
        className={`${montserrat.className} ${indie.variable} ${montserrat.variable}`}
      >
        <body>
          <Toast />
          <main className="h-screen w-full">
            <Header />
            <div className="mx-auto max-w-[980px]">
              <div className="mx-auto w-[92%]">{children}</div>
            </div>
          </main>
        </body>
      </html>
    </StyledComponentsRegistry>
  )
}
