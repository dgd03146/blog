import Logo from '@/components/common/atoms/logo'
import ToggleButton from '@/components/common/atoms/toggleButton'
import Navigation from '@/components/common/molecules/headerNavigation'
import LanguageMenu from '@/components/common/molecules/languageMenu'

type TProps = {
  handleMenu: () => void
  isOpen: boolean
}

const HeaderMenu = ({ handleMenu, isOpen }: TProps) => {
  return (
    <>
      <ToggleButton handleMenu={handleMenu} isOpen={isOpen} />
      <Logo />
      <Navigation ismobile={false} handleMenu={handleMenu} />
      <LanguageMenu ismobile={false} />
    </>
  )
}

export default HeaderMenu
