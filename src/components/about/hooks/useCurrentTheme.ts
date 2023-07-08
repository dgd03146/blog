import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const useCurrentTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const current_theme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  return { mounted, handleTheme, current_theme, codeStyle }
}

export default useCurrentTheme
