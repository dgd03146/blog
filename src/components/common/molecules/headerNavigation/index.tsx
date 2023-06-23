import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import tw from 'twin.macro'
import Button from '@/components/common/atoms/button'
import { ROUTES } from '@/constants/route'
import Underline from './style'

type TProps = {
  handleMenu: () => void
  ismobile: 'true' | 'false'
}

const Navigation = ({ handleMenu, ismobile }: TProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigate = (path: string) => {
    handleMenu()
    router.push(path)
  }

  return (
    <div
      css={[tw`gap-x-8 `, ismobile === 'true' ? tw`` : tw`hidden laptop:flex`]}
    >
      {ROUTES.map(({ title, path }) => (
        <div
          key={path}
          className="group"
          css={[tw`relative`, ismobile === 'true' && tw`text-center my-4`]}
        >
          {ismobile ? (
            <Button onClick={() => handleNavigate(path)}>{title}</Button>
          ) : (
            <Link href={path}>{title}</Link>
          )}
          <Underline
            key={path}
            isactive={pathname === path ? 'true' : 'false'}
          />
        </div>
      ))}
    </div>
  )
}

export default Navigation
