import {} from 'twin.macro'
import { TPost } from '@/types/post'
import Tag from '../../../blog/atoms/tag'

type TProps = {
  post?: TPost
  project?: TPost
}

const Tags = ({ post, project }: TProps) => {
  return (
    <div tw="flex gap-x-2">
      {post
        ? post.tags.map((tag) => <Tag key={tag.id} tag={tag} />)
        : project && project.tags.map((tag) => <Tag key={tag.id} tag={tag} />)}
    </div>
  )
}

export default Tags

//  mb-4