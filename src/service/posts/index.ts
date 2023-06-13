import { getBlogDatabaseId } from '@/envs'
import { TPost } from '@/types/post'
import { pageToPostTransformer } from '@/utils/pageToPostTransformer'
import api from '../api'

const DATABASE_ID = getBlogDatabaseId() ?? ''

export const getPosts = async (): Promise<TPost[]> => {
  const res = await api.post(`${DATABASE_ID}/query`, {
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  })

  return res.data.results.map((it: TPost) => pageToPostTransformer(it))
}
