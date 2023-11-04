import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://junglog.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://junglog.vercel.app/about',
      lastModified: new Date(),
    },

    {
      url: 'https://junglog.vercel.app/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://junglog.vercel.app/contact',
      lastModified: new Date(),
    },
  ]
}
