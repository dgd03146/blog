import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const StyledLink = styled(Link)<{ ismobile: 'true' | 'false' }>`
  svg {
    ${tw`text-h3 text-dark hover:text-gray mb-6`}
    ${({ ismobile }) => ismobile === 'true' && tw`mb-0`}
  }
`
