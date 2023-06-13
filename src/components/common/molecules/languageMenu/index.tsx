import { useState } from 'react'
import tw from 'twin.macro'
import Button from '@/components/common/atoms/button'
import ThemeButton from '@/components/common/atoms/themeButton'

type TProps = {
  ismobile: boolean
}

const LanguageMenu = ({ ismobile }: TProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      css={[
        tw`flex items-center hover:text-gray gap-x-2`,
        !ismobile && tw`hidden laptop:flex `,
      ]}
    >
      <Button className="text-normal">{'KOR'}</Button>
      <Button className="text-normal">{'ENG'}</Button>
      <ThemeButton isDarkMode={isDarkMode} handleTheme={handleTheme} />
    </div>
  )
}

export default LanguageMenu
