'use client'

import React, { useState } from 'react'
import tw from 'twin.macro'
import Logo from '@/components/atoms/logo'
import ToggleButton from '@/components/atoms/toggleButton'
import LanguageMenu from '@/components/molecules/languageMenu'
import Navigation from '@/components/molecules/navigation'
import MobileMenu from '@/components/organisms/mobileMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header tw="w-full px-32 py-8 max-h-[90px] relative">
      <nav tw="flex justify-between items-center gap-x-4">
        <ToggleButton handleMenu={handleMenu} isOpen={isOpen} />
        {isOpen && <MobileMenu handleMenu={handleMenu} />}
        <Logo />
        <Navigation isMobile={false} handleMenu={handleMenu} />
        <LanguageMenu isMobile={false} />
      </nav>
    </header>
  )
}

export default Header
