import { MetadataRoute } from 'next'
import { getArticles } from '@/service/notion'
import { getProjects } from '@/service/notion'

const URL = 'https://junglog.vercel.app'

export default async function sitemap() {
  const articles = await getArticles()
  const projects = await getProjects()

  const articleUrls = articles.map((article) => ({
    url: `${URL}/${article.slug}`,
    lastModified: article.date,
  }))
  const projectUrls = (await projects).map((project) => ({
    url: `${URL}/projects/${project.slug}`,
    lastModified: project.date,
  }))

  return [
    {
      url: URL,
      lastModified: new Date(),
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
    },

    {
      url: `${URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
    },
    ...articleUrls,
    ...projectUrls,
  ]
}
