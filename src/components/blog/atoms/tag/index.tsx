import { TTag } from '@/types/post'
import { Container } from './style'

const Tag = ({ key, tag }: { key: string; tag: TTag }) => {
  return <Container key={key}>{tag.name}</Container>
}

export default Tag
