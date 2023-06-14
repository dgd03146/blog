import PostsSection from '@/components/blog/organisms/postsSection'
import { getAllPosts } from '@/service/notion'

export const revalidate = 21600

const Blog = async () => {
  const posts = await getAllPosts()

  return <PostsSection posts={posts} />
}

export default Blog
