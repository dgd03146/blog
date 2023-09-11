'use client'

import React, { useState } from 'react'
import {} from 'twin.macro'
import MobileMenu from '@/components/common/mobileMenu'
import HeaderMenu from './headerMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header tw="w-full py-8 max-h-[90px]  fixed left-0 right-0 top-0  bg-light dark:bg-dark z-[1] ">
      <nav tw="flex justify-between items-center gap-x-4 max-w-[980px] mx-auto w-[92%] laptop:w-full">
        <HeaderMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </nav>
    </header>
  )
}

export default Header
