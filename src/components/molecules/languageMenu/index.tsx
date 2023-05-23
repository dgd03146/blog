import { useState } from 'react'

import tw from 'twin.macro'
import Button from '@/components/atoms/button'
import ThemeButton from '@/components/atoms/themeButton'

type TProps = {
  isMobile: boolean
}

const LanguageMenu = ({ isMobile }: TProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      css={[
        tw`flex items-center hover:text-gray`,
        !isMobile && tw`hidden laptop:flex `,
      ]}
    >
      <Button text="KOR" cssStyle="mx-2 text-normal" />
      <Button text="ENG" cssStyle="mx-2 text-normal" />
      <ThemeButton isDarkMode={isDarkMode} handleTheme={handleTheme} />
    </div>
  )
}

export default LanguageMenu
