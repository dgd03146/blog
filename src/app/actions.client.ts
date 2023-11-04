import { cookies } from 'next/headers'

export const getTheme = () => {
  return cookies().get('theme')?.value ?? 'light'
}
