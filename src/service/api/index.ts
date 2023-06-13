import Axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios'

import { getApiEndPoint } from '@/envs'

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
