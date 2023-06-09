import Posts from '@/components/blog/posts'
import { getAllPosts } from '@/service/notion'

export const revalidate = 21600

const BlogPage = async () => {
  const posts = await getAllPosts()

  return <Posts posts={posts} />
}

export default BlogPage
