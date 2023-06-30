import { Dispatch, SetStateAction } from 'react'
import Logo from '@/components/common/atoms/logo'
import ToggleButton from '@/components/common/atoms/toggleButton'
import Navigation from '@/components/common/molecules/headerNavigation'
import LanguageMenu from '@/components/common/molecules/languageMenu'

type TProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

const HeaderMenu = ({ setIsOpen, isOpen }: TProps) => {
  return (
    <>
      <ToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
      <Logo />
      <Navigation ismobile="false" setIsOpen={setIsOpen} />
      <LanguageMenu ismobile="false" />
    </>
  )
}

export default HeaderMenu
