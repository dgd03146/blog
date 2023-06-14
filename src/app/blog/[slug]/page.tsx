import PostPage from '@/components/blog/molecules/postPage'
import { getPost } from '@/service/notion'

type TProps = {
  params: {
    slug: string
  }
}

const BlogPost = async ({ params: { slug } }: TProps) => {
  const post = await getPost(slug)

  return <PostPage post={post} />
}

export default BlogPost
