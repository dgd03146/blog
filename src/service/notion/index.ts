import { Client } from '@notionhq/client'

import { NotionToMarkdown } from 'notion-to-md'

import {
  getArticleDatabaseId,
  getNotionToken,
  getProjectDatabaseId,
} from '@/envs'
import { TPostDetail } from '@/types/notion'
import { pageToImageUrl } from '@/utils/pageToImageUrl'
import { pageToPostTransformer } from '@/utils/pageToPostTransformer'
import { uploadImageToCloudinary } from '../cloudinary'

const notionClient = new Client({
  auth: getNotionToken(),
})
const n2m = new NotionToMarkdown({ notionClient })

export const getNotionPages = (databaseId: string) => {
  return notionClient.databases.query({
    database_id: databaseId,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'created',
        direction: 'descending',
      },
    ],
  })
}

export const getNotionPage = (slug: string) => {
  return notionClient.databases.query({
    database_id: getArticleDatabaseId(),
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })
}

export const getNotionImageUrl = async (pageId: string) => {
  const response = await notionClient.pages.retrieve({ page_id: pageId })
  return pageToImageUrl(response)
}

export const getAllData = async (databaseId: string) => {
  const response = await getNotionPages(databaseId)

  const data = await Promise.all(
    response.results.map(async (page) => {
      const imageUrl = await getNotionImageUrl(page.id)
      const cover = await uploadImageToCloudinary(imageUrl)

      const transformedPost = pageToPostTransformer(page)
      return { ...transformedPost, cover }
    }),
  )

  return data // 이제 data는 프로미스가 아닌 결과값의 배열입니다.
}

export const getArticles = () => {
  return getAllData(getArticleDatabaseId())
}

export const getProjects = () => {
  return getAllData(getProjectDatabaseId())
}

export const getPost = async (slug: string): Promise<TPostDetail> => {
  const response = await getNotionPage(slug)

  const page = response.results[0]
  const post = page && pageToPostTransformer(page)
  let markdown = ''

  if (page && page.id) {
    const mdBlocks = await n2m.pageToMarkdown(page.id)
    const mdString = n2m.toMarkdownString(mdBlocks)
    markdown = mdString.parent
  }

  return {
    post,
    markdown,
  }
}
