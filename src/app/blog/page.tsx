import PostsSection from '@/components/blog/organisms/postsSection'
import { NotionService } from '@/service/notion'
import { getPosts } from '@/service/posts'

// const getPosts = async () => {
//   const notionService = new NotionService()
//   const data = await notionService.getPublishedBlogPosts()
//   return data
// }

const Blog = async () => {
  const posts = await getPosts()

  return (
    <>
      <PostsSection posts={posts} />
    </>
  )
}

export default Blog
