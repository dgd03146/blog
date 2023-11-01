import { Client } from '@notionhq/client'

import { revalidatePath } from 'next/cache'
import { NotionToMarkdown } from 'notion-to-md'

import uploadNotionImagesToCloudinary from 'upload-notion-images-to-cloudinary'
import {
  getBlogDatabaseId,
  getCloudinaryURL,
  getCloudinaryUploadFolder,
  getNotionToken,
  getProjectDatabaseId,
} from '@/envs'
import { TPostDetail } from '@/types/notion'
import { pageToPostTransformer } from '@/utils/pageToPostTransformer'

const notion = new Client({
  auth: getNotionToken(),
})
const n2m = new NotionToMarkdown({ notionClient: notion })

const getAllData = async (databaseId: string) => {
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

  await uploadNotionImagesToCloudinary({
    notionToken: getNotionToken(),
    notionDatabaseId: databaseId,
    cloudinaryUrl: getCloudinaryURL(),
    cloudinaryUploadFolder: getCloudinaryUploadFolder(),
    logLevel: 'debug',
  })

  return response.results.map((res) => {
    const transformedPost = pageToPostTransformer(res)
    return transformedPost
  })
}

// 동일하게 호출한 인자에 대해 cache 값을 사용함
export const getAllPosts = async () => {
  revalidatePath(`/`, 'page')
  return getAllData(getBlogDatabaseId())
}

export const getAllProjects = async () => {
  revalidatePath(`/projects`, 'page')
  return getAllData(getProjectDatabaseId())
}

export const getPost = async (slug: string): Promise<TPostDetail> => {
  const response = await notion.databases.query({
    database_id: getBlogDatabaseId(),
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
