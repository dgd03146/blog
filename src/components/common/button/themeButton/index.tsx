import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import {} from 'twin.macro'
import useCurrentTheme from '@/components/about/hooks/useCurrentTheme'

const ThemeButton = () => {
  const { mounted, current_theme, handleTheme } = useCurrentTheme()

  if (!mounted) {
    return <BsToggleOff tw="text-[2rem]" />
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleTheme}
    >
      {current_theme === 'light' ? (
        <BsToggleOff tw="text-[2rem]" />
      ) : (
        <BsToggleOn tw="text-[2rem]" />
      )}
    </motion.button>
  )
}

export default ThemeButton
