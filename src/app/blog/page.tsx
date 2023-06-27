import Posts from '@/components/blog/organisms/posts'
import { getAllPosts } from '@/service/notion'

export const revalidate = 21600

const BlogPage = async () => {
  const posts = await getAllPosts()

  return <Posts posts={posts} />
}

export default BlogPage
