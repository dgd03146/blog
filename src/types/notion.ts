export type TTag = {
  color: string
  id: string
  name: string
}

export type TNotionData = {
  id: string
  slug: string
  cover: string
  title?: string
  tags: TTag[]
  description: string
  date: string
  githubUrl?: string
  demoUrl?: string
}

export type TPostDetail = {
  post: TNotionData
  markdown: string
}
