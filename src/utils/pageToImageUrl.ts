import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

export const pageToImageUrl = (
  page: PartialPageObjectResponse | PageObjectResponse,
): string => {
  const { cover } = page as PageObjectResponse
  let defaultCover = ''
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

  return defaultCover
}
