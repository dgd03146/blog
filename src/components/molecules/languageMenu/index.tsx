import { useState } from 'react'
import tw from 'twin.macro'
import Button from '@/components/atoms/buttons'
import ThemeButton from '@/components/atoms/buttons/themeButton'

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
      <Button text="KOR" cssStyle="text-normal" />
      <Button text="ENG" cssStyle="text-normal" />
      <ThemeButton isDarkMode={isDarkMode} handleTheme={handleTheme} />
    </div>
  )
}

export default LanguageMenu
