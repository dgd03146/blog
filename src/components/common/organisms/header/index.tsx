'use client'

import React, { useState } from 'react'
import tw from 'twin.macro'
import HeaderMenu from '@/components/common/molecules/headerMenu'
import MobileMenu from '@/components/common/molecules/mobileMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  // header tailwind  px-8 foldable:px-16 laptop:px-32

  return (
    <header tw="w-full py-8 max-h-[90px] relative mx-auto max-w-[92%]  desktop:max-w-[1140px] ">
      <nav tw="flex justify-between items-center gap-x-4">
        <HeaderMenu handleMenu={handleMenu} isOpen={isOpen} />
        {isOpen && <MobileMenu handleMenu={handleMenu} />}
      </nav>
    </header>
  )
}

export default Header
