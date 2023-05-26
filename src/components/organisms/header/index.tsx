'use client'

import React, { useState } from 'react'
import tw from 'twin.macro'
import HeaderMenu from '@/components/organisms/menus/headerMenu'
import MobileMenu from '@/components/organisms/menus/mobileMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header tw="w-full px-8 foldable:px-16 laptop:px-32 py-8 max-h-[90px] relative">
      <nav tw="flex justify-between items-center gap-x-4">
        <HeaderMenu handleMenu={handleMenu} isOpen={isOpen} />
        {isOpen && <MobileMenu handleMenu={handleMenu} />}
      </nav>
    </header>
  )
}

export default Header
