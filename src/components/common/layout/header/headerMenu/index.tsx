import { Dispatch, SetStateAction } from 'react'
import ToggleButton from '@/components/common/button/toggleButton'
import Navigation from '../headerNavigation'
import LanguageMenu from '../languageMenu'
import Logo from '../logo'

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
