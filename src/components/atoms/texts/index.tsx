import React, { ReactNode } from 'react'
import tw from 'twin.macro'

type TProps = {
  text: string
  children?: ReactNode
}

export const Heading1 = ({ text, children }: TProps) => {
  return (
    <h1 tw="text-h1">
      {text}
      {children}
    </h1>
  )
}

export const Heading2 = ({ text, children }: TProps) => {
  return (
    <h2 tw="text-h2">
      {text}
      {children}
    </h2>
  )
}

export const Heading3 = ({ text, children }: TProps) => {
  return (
    <h3 tw="text-h3 font-medium">
      {text}
      {children}
    </h3>
  )
}

export const Paragraph = ({ text, children }: TProps) => {
  return (
    <p tw="text-normal">
      {text}
      {children}
    </p>
  )
}
