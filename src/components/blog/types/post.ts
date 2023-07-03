export type TTag = {
  color: string
  id: string
  name: string
}

export type TPost = {
  id: string
  slug: string
  cover: string
  title?: string
  tags: TTag[]
  description: string
  date: string
}

export type TPostDetail = {
  post: TPost
  markdown: string
}
