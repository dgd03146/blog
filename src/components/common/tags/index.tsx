import {} from 'twin.macro'
import { TNotionData } from '@/types/notion'
import Tag from '../tag'

type TProps = {
  post?: TNotionData
  project?: TNotionData
}

const Tags = ({ post, project }: TProps) => {
  const activeItem = post || project

  return (
    <ul tw="flex gap-x-2 flex-wrap">
      {activeItem?.tags.map((tag) => (
        <li key={tag.id}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
