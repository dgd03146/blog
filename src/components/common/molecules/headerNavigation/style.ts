import tw, { css, styled } from 'twin.macro'

const Underline = styled.div<{ isactive?: 'true' | 'false' }>`
  ${(props) =>
    props.isactive === 'true' &&
    css`
      ${tw`scale-x-100`}
    `}

  ${tw`absolute w-full h-0.5 bg-light dark:bg-light laptop:bg-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
`

export default Underline
