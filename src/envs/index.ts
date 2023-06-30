export const getApiEndPoint = () => {
  return 'https://api.notion.com/v1/databases'
}

export const getBlogDatabaseId = () => {
  return process.env.NOTION_BLOG_DATABASE_ID || ''
}

export const getPortfolioDatabaseId = () => {
  return process.env.NOTION_PORTFOLIO_DATABASE_ID
}

export const getNotionToken = () => {
  return process.env.NOTION_TOKEN
}

export const getNodeMailerUser = () => {
  return process.env.AUTH_USER
}

export const getNodeMailerPass = () => {
  return process.env.AUTH_PASS
}
