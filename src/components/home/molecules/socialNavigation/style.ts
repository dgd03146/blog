import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const StyledLink = styled(Link)`
  svg {
    margin-bottom: 0 !important;
    ${tw`text-h2 text-dark mb-6 hover:text-gray hover:scale-105 ease-in-out duration-500`}
  }
`
