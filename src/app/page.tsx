import Script from 'next/script'
import Posts from '@/components/blog/posts'
// import Hero from '@/components/home/hero'
import PageLayout from '@/components/common/layout/pageLayout'
import { getAllPosts } from '@/service/notion'

export default async function Page() {
  const posts = await getAllPosts()

  // className="font-indie"

  return (
    <PageLayout>
      <Posts posts={posts} />
      {/* <Hero /> */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CBQMSPCGYV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-CBQMSPCGYV');
        `}
      </Script>
    </PageLayout>
  )
}
