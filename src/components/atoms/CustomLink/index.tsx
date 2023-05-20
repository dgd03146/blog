import React from 'react'
import Link from 'next/link'

type TProps = {
  href: string
  title: string
}

const CustomLink = ({ href, title }: TProps) => {
  return (
    <Link key={title} href={href}>
      {title}
    </Link>
  )
}

export default CustomLink
