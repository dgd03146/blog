import tw, { styled } from 'twin.macro'

export const PostContainer = styled.li`
  padding: 1.5rem 2rem;
  border-radius: 24px;

  ${tw`bg-light`}

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  transition: background-color, box-shadow 0.2s ease-in-out;
`

export const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
    border-radius: 12px;
  }
`

export const Tag = styled.p`
  width: fit-content;
  padding: 0.25rem 0.75rem;
  border: 1px solid;
  box-shadow: red 0 0 3px;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0;
  font-weight: 300;
  word-break: keep-all;
  overflow-wrap: break-word;
`
