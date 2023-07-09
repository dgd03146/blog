import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { TNotionData, TTag } from '@/types/notion'

type TNotionKey = TNotionData & {
  [key: string]: string | string[] | TTag[] | null
}

export interface TNotionDatabase extends PageObjectResponse {
  github_url: { id: string; type: string; url: string }
  demo_url: { id: string; type: string; url: string }
}

export const pageToPostTransformer = (
  page: PartialPageObjectResponse | PageObjectResponse,
): TNotionData => {
  const { id, properties, cover, last_edited_time } = page as PageObjectResponse
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
      case 'url':
        value = propertyVal.url
        break
      default:
        break
    }
    res[key] = value
  })

  let defaultCover = '/assets/images/default-cover.png'
  if (cover !== null) {
    switch (cover.type) {
      case 'file':
        defaultCover = cover.file.url
        break
      case 'external':
        defaultCover = cover.external.url
        break
      default:
        break
    }
  }

  return {
    id,
    cover: defaultCover,
    title: res.title || '',
    tags: res.tags || [],
    description: res.description || '',
    date: res.date || last_edited_time,
    slug: res.slug || '',
    githubUrl: githubUrl || '',
    demoUrl: demoUrl || '',
  }
}
