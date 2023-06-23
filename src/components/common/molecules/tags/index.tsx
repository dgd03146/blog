import tw from 'twin.macro'
import { TPost } from '@/types/post'
import Tag from '../../../blog/atoms/tag'

type TProps = {
  post: TPost
}

const Tags = ({ post }: TProps) => {
  return (
    <div tw="flex gap-x-2 mt-2">
      {post.tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  )
}

export default Tags

//  mb-4
