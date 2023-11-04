import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import tw from 'twin.macro'
import { ROUTES, allPaths } from '@/constants/route'

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
            <button tw="text-normal" onClick={() => handleNavigate(path)}>
              {title}
            </button>
          ) : (
            <Link href={path}>{title}</Link>
          )}
          <div
            css={[
              tw`absolute w-full h-0.5 bg-light dark:bg-light laptop:bg-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500`,
              pathname === path && tw`scale-x-100`,
              path === '/' && !allPaths.includes(pathname) && tw`scale-x-100`,
            ]}
          />
        </div>
      ))}
    </div>
  )
}

export default Navigation
