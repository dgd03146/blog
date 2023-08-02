import Script from 'next/script'
import Hero from '@/components/home/hero'

export default function Page() {
  return (
    <div className="font-indie">
      <Hero />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CBQMSPCGYV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-CBQMSPCGYV');
        `}
      </Script>
    </div>
  )
}
