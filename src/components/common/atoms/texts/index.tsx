import React, { ReactNode } from 'react'
import tw from 'twin.macro'

// FIXME: 없애기

type TProps = {
  key?: string
  text: string
  children?: ReactNode
  cssStyle?: string
}

export const BigText = ({ text, children, cssStyle, key }: TProps) => {
  return (
    <h1 className={`${cssStyle} text-big`}>
      {text}
      {children}
    </h1>
  )
}

export const Heading1 = ({ text, children, cssStyle, key }: TProps) => {
  return (
    <h1 className={`${cssStyle} break-words break-keep text-h1`}>
      {text}
      {children}
    </h1>
  )
}

export const Heading2 = ({ text, children, cssStyle, key }: TProps) => {
  return (
    <h2 className={`${cssStyle} break-words break-keep text-h2`}>
      {text}
      {children}
    </h2>
  )
}

export const Heading3 = ({ text, children, cssStyle, key }: TProps) => {
  return (
    <h3 className={`${cssStyle} break-words break-keep  text-h3 font-medium`}>
      {text}
      {children}
    </h3>
  )
}

export const Paragraph = ({ text, children, cssStyle, key }: TProps) => {
  return (
    <p className={`${cssStyle} break-words break-keep text-normal `}>
      {text}
      {children}
    </p>
  )
}
