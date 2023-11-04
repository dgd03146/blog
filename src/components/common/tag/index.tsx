import { TTag } from '@/types/notion'
import { Container } from './style'

const Tag = ({ tag }: { tag: TTag }) => {
  return <Container>{tag.name}</Container>
}

export default Tag
