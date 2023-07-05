import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const useCurrentTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme } = useTheme()
  const current_theme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return { mounted, current_theme }
}

export default useCurrentTheme
