import { TPost } from '@/types/blog'

export const pageToPostTransformer = (page: any): TPost => {
  let cover = page.cover
  switch (cover.type) {
    case 'file':
      cover = page.cover.file
      break
    case 'external':
      cover = page.cover.external.url
      break
    default:
      // add default cover image if you want..
      cover = ''
  }

  return {
    id: page.id,
    cover,
    title: page.properties.Name.title[0].plain_text,
    tags: page.properties.Tags.multi_select,
    description: page.properties.Description.rich_text.plain_text,
    date: page.properties.Updated.last_edited_time,
    slug: page.properties.Slug.formula.string,
  }
}
