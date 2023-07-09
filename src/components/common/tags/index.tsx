import {} from 'twin.macro'
import { TNotionData } from '@/types/notion'
import Tag from '../tag'

type TProps = {
  post?: TNotionData
  project?: TNotionData
}

const Tags = ({ post, project }: TProps) => {
  return (
    <div tw="flex gap-x-2 flex-wrap">
      {post
        ? post.tags.map((tag) => <Tag key={tag.id} tag={tag} />)
        : project && project.tags.map((tag) => <Tag key={tag.id} tag={tag} />)}
    </div>
  )
}

export default Tags

//  mb-4
