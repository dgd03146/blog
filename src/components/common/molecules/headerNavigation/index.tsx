import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import tw from 'twin.macro'
import Button from '@/components/common/atoms/button'
import { ROUTES } from '@/constants/route'
import Underline from './style'

type TProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  ismobile: 'true' | 'false'
}

const Navigation = ({ ismobile, setIsOpen }: TProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigate = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  return (
    <div
      css={[tw`gap-x-8`, ismobile === 'true' ? tw`` : tw`hidden laptop:flex`]}
    >
      {ROUTES.map(({ title, path }) => (
        <div
          key={path}
          className="group"
          css={[tw`relative`, ismobile === 'true' && tw`text-center my-4`]}
        >
          {ismobile ? (
            <Button tw="text-normal" onClick={() => handleNavigate(path)}>
              {title}
            </Button>
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
