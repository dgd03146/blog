import tw from 'twin.macro'
import { TPost } from '@/types/post'
import { formatDate } from '@/utils/formatDate'
import Tag from '../../atoms/tag'

type TProps = {
  post: TPost
}

const PostPageInfo = ({ post }: TProps) => {
  return (
    <div tw="flex flex-col items-center">
      <h1 tw="text-big mb-2">{post.title}</h1>
      <h2 tw="font-medium mb-2">{post.description}</h2>
      <p>{formatDate(post.date)}</p>
      <div tw="mt-2 flex gap-x-2">
        {post.tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default PostPageInfo
