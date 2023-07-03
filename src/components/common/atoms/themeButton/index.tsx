import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import {} from 'twin.macro'

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleTheme}
    >
      {currentTheme === 'light' ? (
        <BsToggleOff tw="text-[2rem]" />
      ) : (
        <BsToggleOn tw="text-[2rem]" />
      )}
    </motion.button>
  )
}

export default ThemeButton
