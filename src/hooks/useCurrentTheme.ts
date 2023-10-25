import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { setServerTheme } from '@/app/actions.server'

const useCurrentTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const current_theme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setServerTheme(newTheme)
  }

  return { mounted, handleTheme, current_theme }
}

export default useCurrentTheme
