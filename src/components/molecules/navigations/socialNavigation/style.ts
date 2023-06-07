import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const StyledLink = styled(Link)<{ ismobile: boolean }>`
  svg {
    ${tw`text-h3 text-dark hover:text-gray mb-6`}
    ${({ ismobile }) => ismobile && tw`mb-0`}
  }
`
