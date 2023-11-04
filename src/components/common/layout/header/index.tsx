'use client'

import React, { useState } from 'react'
import {} from 'twin.macro'
import MobileMenu from '@/components/common/mobileMenu'
import HeaderMenu from './headerMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header tw="w-full fixed left-0 right-0 top-0  bg-light dark:bg-dark z-[1]">
      <nav tw="flex justify-between items-center gap-x-4 max-w-[1140px] mx-auto w-[92%] max-h-[60px] py-4">
        <HeaderMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </nav>
    </header>
  )
}

export default Header
