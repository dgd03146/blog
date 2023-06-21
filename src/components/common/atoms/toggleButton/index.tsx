import React from 'react'
import tw from 'twin.macro'
import Button from '../button'

type TProps = {
  handleMenu: () => void
  isOpen: boolean
}

const ToggleButton = ({ handleMenu, isOpen }: TProps) => {
  return (
    <Button
      className="flex flex-col items-center justify-center laptop:hidden"
      onClick={handleMenu}
    >
      <span
        css={[
          tw`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm`,
          isOpen ? tw`rotate-45 translate-y-1` : tw`-translate-y-0.5`,
        ]}
      ></span>
      <span
        css={[
          tw`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5`,
          isOpen ? tw`opacity-0` : tw`opacity-100`,
        ]}
      ></span>
      <span
        css={[
          tw`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm`,
          isOpen ? tw`-rotate-45 -translate-y-1` : tw`translate-y-0.5`,
        ]}
      ></span>
    </Button>
  )
}

export default ToggleButton
