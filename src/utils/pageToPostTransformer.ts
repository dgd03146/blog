import {
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { TNotionData, TTag } from '@/types/notion'
import { pageToImageUrl } from './pageToImageUrl'

type TNotionKey = TNotionData & {
  [key: string]: string | string[] | TTag[] | null
}

export interface TNotionDatabase extends PageObjectResponse {
  github_url: { id: string; type: string; url: string }
  demo_url: { id: string; type: string; url: string }
}

export const pageToPostTransformer = (
  page:
    | PartialPageObjectResponse
    | PageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse,
): TNotionData => {
  const { id, properties, last_edited_time, created_time } =
    page as PageObjectResponse
  const { github_url, demo_url } = properties

  const githubUrl = github_url?.type === 'url' ? github_url.url : ''
  const demoUrl = demo_url?.type === 'url' ? demo_url.url : ''

  const res: Partial<TNotionKey> = {}

  Object.keys(properties).forEach((key) => {
    const propertyVal = properties[key]

    let value: string | string[] | TTag[] | null = ''

    switch (propertyVal.type) {
      case 'title':
        value = propertyVal.title.map((title) => title.plain_text).join(' ')
        break
      case 'rich_text':
        value = propertyVal.rich_text.map((text) => text.plain_text).join(' ')
        break
      case 'formula':
        if (propertyVal.formula.type === 'string')
          value = propertyVal.formula.string
        break
      case 'multi_select':
        value = propertyVal.multi_select.map((select) => select)
        break
      case 'last_edited_time':
        value = propertyVal.last_edited_time
        break
      case 'created_time':
        value = propertyVal.created_time
        break
      case 'url':
        value = propertyVal.url
        break
      default:
        break
    }
    res[key] = value
  })

  const defaultCover = pageToImageUrl(page)

  return {
    id,
    cover: defaultCover || '/assets/images/default-cover.png',
    title: res.title || '',
    tags: res.tags || [],
    description: res.description || '',
    date: res.date || created_time,
    slug: res.slug || '',
    githubUrl: githubUrl || '',
    demoUrl: demoUrl || '',
  }
}
