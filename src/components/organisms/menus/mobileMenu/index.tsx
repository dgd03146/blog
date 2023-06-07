import React from 'react'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import LanguageMenu from '@/components/molecules/languageMenu'
import Navigation from '@/components/molecules/navigations/headerNavigation'

type TProps = {
  handleMenu: () => void
}

const MobileMenu = ({ handleMenu }: TProps) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
        x: '-50%',
        y: '-50%',
        transitionDuration: '300',
      }}
      animate={{ scale: 1, opacity: 1 }}
      tw="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 text-light dark:text-black z-10 laptop:hidden"
    >
      <Navigation isMobile={true} handleMenu={handleMenu} />
      <LanguageMenu isMobile={true} />
    </motion.div>
  )
}

export default MobileMenu
