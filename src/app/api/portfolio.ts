import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const NOTION_TOKEN = 'secret_2r5OHuuaGAttdT6mvVDERfwwnCSd3RZApTLlNBKRfmg'
const NOTION_PORTFOLIO_DATABASE_ID = '8523abb384c549de8440fd7b96794ed0'
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!NOTION_TOKEN || !NOTION_PORTFOLIO_DATABASE_ID)
    throw new Error('Missing notion token or DB-ID')

  const response = await notion.databases.query({
    database_id: NOTION_PORTFOLIO_DATABASE_ID,
  })

  console.log(response.results, 'query result')

  res.status(200).json({ name: 'John Doe' })
}
