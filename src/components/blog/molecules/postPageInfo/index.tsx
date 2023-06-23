import tw from 'twin.macro'
import Tags from '@/components/common/molecules/tags'
import { TPost } from '@/types/post'
import { formatDate } from '@/utils/formatDate'

type TProps = {
  post: TPost
}

const PostPageInfo = ({ post }: TProps) => {
  return (
    <div tw="flex flex-col items-center">
      <h1 tw="text-big mb-2">{post.title}</h1>
      <h2 tw="font-medium mb-2">{post.description}</h2>
      <p>{formatDate(post.date)}</p>
      <Tags post={post} />
    </div>
  )
}

export default PostPageInfo
