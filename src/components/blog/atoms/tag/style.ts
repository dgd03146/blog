import tw, { styled } from 'twin.macro'

export const Container = styled.p`
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

  ${tw`text-primary border-primary text-[14px] font-medium`}
`
