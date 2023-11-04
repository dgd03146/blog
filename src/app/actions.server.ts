'use server'

import { cookies } from 'next/headers'

export const setServerTheme = async (theme: string) => {
  cookies().set('theme', theme, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: new Date(2147483647 * 1000),
  })
}

export const getServerTheme = () => {
  return cookies().get('theme')?.value ?? 'light'
}
