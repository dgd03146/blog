import { useEffect, useState, CSSProperties } from 'react'
import { useTheme } from 'next-themes'
import {
  atomOneLight,
  atomOneDark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

type CSSPropertiesMap = { [key: string]: CSSProperties }

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

  const codeStyle: CSSPropertiesMap | undefined =
    current_theme === 'light' ? atomOneLight : atomOneDark

  return { mounted, handleTheme, current_theme, codeStyle }
}

export default useCurrentTheme
