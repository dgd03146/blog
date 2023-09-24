import { cache } from 'react'
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import {
  getBlogDatabaseId,
  getNotionToken,
  getPortfolioDatabaseId,
} from '@/envs'
import { TPostDetail } from '@/types/notion'

import { pageToPostTransformer } from '@/utils/pageToPostTransformer'

const BLOG_DATABASE_ID = getBlogDatabaseId()
const PORTFOLIO_DATABASE_ID = getPortfolioDatabaseId()

const notion = new Client({
  auth: getNotionToken(),
})
const n2m = new NotionToMarkdown({ notionClient: notion })

const getAllData = cache(async (databaseId: string) => {
  const response = await notion.databases.query({
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

  return response.results.map((res) => {
    return pageToPostTransformer(res)
  })
})

// 동일하게 호출한 인자에 대해 cache 값을 사용함
export const getAllPosts = async () => {
  return getAllData(BLOG_DATABASE_ID)
}

export const getAllProjects = async () => {
  return getAllData(PORTFOLIO_DATABASE_ID)
}

export const getPost = async (slug: string): Promise<TPostDetail> => {
  const response = await notion.databases.query({
    database_id: BLOG_DATABASE_ID,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })

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
