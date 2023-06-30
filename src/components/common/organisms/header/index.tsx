'use client'

import React, { useState } from 'react'
import {} from 'twin.macro'
import HeaderMenu from '@/components/common/molecules/headerMenu'
import MobileMenu from '@/components/common/molecules/mobileMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // header tailwind  px-8 foldable:px-16 laptop:px-32

  return (
    <header tw="w-full py-8 max-h-[90px] relative mx-auto max-w-[92%] desktop:max-w-[980px]">
      <nav tw="flex justify-between items-center gap-x-4">
        <HeaderMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </nav>
    </header>
  )
}

export default Header
