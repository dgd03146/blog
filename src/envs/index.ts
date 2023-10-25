export const getApiEndPoint = () => {
  return 'https://api.notion.com/v1/databases'
}

export const getBlogDatabaseId = () => {
  return process.env.NOTION_BLOG_DATABASE_ID as string
}

export const getPortfolioDatabaseId = () => {
  return process.env.NOTION_PORTFOLIO_DATABASE_ID as string
}

export const getNotionToken = () => {
  return process.env.NOTION_TOKEN as string
}

export const getNodeMailerUser = () => {
  return process.env.AUTH_USER as string
}

export const getNodeMailerPass = () => {
  return process.env.AUTH_PASS as string
}

export const getGoogleVerificationCode = () => {
  return process.env.GOOGLE_VERIFICATION as string
}
