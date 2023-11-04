import Script from 'next/script'
import Posts from '@/components/blog/posts'
import PageLayout from '@/components/common/layout/pageLayout'
import { getArticles } from '@/service/notion'

export const revalidate = 21600

export default async function HomePage() {
  const posts = await getArticles()

  return (
    <PageLayout>
      <Posts posts={posts} />
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
