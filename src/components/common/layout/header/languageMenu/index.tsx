import tw from 'twin.macro'
import ThemeButton from '@/components/common/button/themeButton'

type TProps = {
  ismobile: 'true' | 'false'
}

const LanguageMenu = ({ ismobile }: TProps) => {
  return (
    <div
      css={[
        tw`flex items-center hover:text-gray gap-x-2`,
        ismobile === 'false' && tw`hidden laptop:flex `,
      ]}
    >
      {/* TODO: For now English Version */}
      {/* <Button className="text-normal">{'KOR'}</Button>
      <Button className="text-normal">{'ENG'}</Button> */}
      <ThemeButton />
    </div>
  )
}

export default LanguageMenu
