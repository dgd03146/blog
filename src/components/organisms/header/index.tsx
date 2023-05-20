'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import tw from 'twin.macro'
import CustomLink from '@/components/atoms/CustomLink'
import LogoColor from '@/constants/motion'
import { ROUTES } from '@/constants/route'
import Underline from './style'

const MotionLink = motion(Link)

const Header = () => {
  const pathname = usePathname()
  return (
    <header tw="w-full px-32 py-8">
      <nav tw="flex justify-between items-center gap-x-4">
        <MotionLink href="/" tw="font-bold text-h3" whileHover={LogoColor}>
          GeoJung
        </MotionLink>
        <div tw="flex gap-x-8">
            {ROUTES.map(({ title, path }) => (
              <div key={path} className="group" tw="relative">
                <CustomLink  href={path} title={title} />
                <Underline key={path} isactive={pathname === path ? "true" : "false"} />
              </div>
            ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
