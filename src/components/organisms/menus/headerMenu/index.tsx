import ToggleButton from '@/components/atoms/buttons/toggleButton'
import Logo from '@/components/atoms/logo'
import LanguageMenu from '@/components/molecules/languageMenu'
import Navigation from '@/components/molecules/navigations/headerNavigation'

type TProps = {
  handleMenu: () => void
  isOpen: boolean
}

const HeaderMenu = ({ handleMenu, isOpen }: TProps) => {
  return (
    <>
      <ToggleButton handleMenu={handleMenu} isOpen={isOpen} />
      <Logo />
      <Navigation isMobile={false} handleMenu={handleMenu} />
      <LanguageMenu isMobile={false} />
    </>
  )
}

export default HeaderMenu
