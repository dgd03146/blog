export const getApiEndPoint = () => {
  return 'https://api.notion.com/v1/databases'
}

export const getArticleDatabaseId = () => {
  return process.env.NOTION_BLOG_DATABASE_ID as string
}

export const getProjectDatabaseId = () => {
  return process.env.NOTION_PROJECT_DATABASE_ID as string
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

export const getCloudinaryURL = () => {
  return process.env.CLOUDINARY_URL as string
}

export const getCloudinaryUploadFolder = () => {
  return process.env.CLOUDINARY_UPLOAD_FOLDER as string
}
