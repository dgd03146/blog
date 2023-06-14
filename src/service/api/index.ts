import Axios, { HttpStatusCode } from 'axios'

import { getApiEndPoint } from '@/envs'

// FIXME: Axios가 굳이 필요없음 왜냐면 노션 라이브러리 사용하니까
export const createApi = () => {
  const NOTION_TOKEN = process.env.NOTION_TOKEN

  const API = Axios.create({
    baseURL: getApiEndPoint(),
    validateStatus: (status) =>
      status >= HttpStatusCode.Ok && status < HttpStatusCode.BadRequest, // 200 ~ 399
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
  })

  return API
}

const api = createApi()

export default api
