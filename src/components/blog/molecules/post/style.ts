import tw, { styled } from 'twin.macro'

export const PostContainer = styled.li`
  padding: 2rem;
  border-radius: 24px;

  ${tw`bg-light`}

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  transition: background-color, box-shadow 0.2s ease-in-out;
`
