'use client'

import React from 'react'
import Link from 'next/link'
import tw from 'twin.macro'
import ROUTE from '@/constants/route'

const Header = () => {
  return (
    <header tw="w-full px-32 py-8">
      <nav tw="flex justify-between items-center gap-x-4">
        <Link href="/" tw="font-bold">
          GeoJung
        </Link>
        <div>
          <ul tw="flex gap-x-8 active:text-blue-500 hover:text-blue-500">
            <li>
              <Link href={ROUTE.HOME}>Home</Link>
            </li>
            <li>
              <Link href={ROUTE.ABOUT}>About</Link>
            </li>
            <li>
              <Link href={ROUTE.ARTICLES}>Projects</Link>
            </li>
            <li>
              <Link href={ROUTE.PROJECTS}>Articles</Link>
            </li>
            <li>
              <Link href={ROUTE.CONTACT}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
