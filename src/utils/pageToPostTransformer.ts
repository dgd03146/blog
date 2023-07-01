import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { TPost, TTag } from '@/components/blog/types/post'

type TPostKey = TPost & { [key: string]: string | string[] | TTag[] }

export const pageToPostTransformer = (
  page: PageObjectResponse | PartialPageObjectResponse,
): TPost => {
  const { id, properties, cover, last_edited_time } = page as PageObjectResponse

  const res: Partial<TPostKey> = {}

  Object.keys(properties).forEach((key) => {
    const propertyVal = properties[key]
    let value: string | string[] | TTag[] = ''

    switch (propertyVal.type) {
      case 'title':
        value = propertyVal.title.map((title) => title.plain_text).join(' ')
        break
      case 'rich_text':
        value = propertyVal.rich_text.map((text) => text.plain_text).join(' ')
        break
      case 'formula':
        value = propertyVal.formula.type
        break
      case 'multi_select':
        value = propertyVal.multi_select.map((select) => select)
        break
      case 'last_edited_time':
        value = propertyVal.last_edited_time
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
    date: last_edited_time,
    slug: res.slug || '',
  }
}
