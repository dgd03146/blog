import React, { Dispatch, SetStateAction } from 'react'
import tw from 'twin.macro'

type TProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

const ToggleButton = ({ setIsOpen, isOpen }: TProps) => {
  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <button
      tw="flex flex-col items-center justify-center laptop:hidden"
      onClick={handleToggle}
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
    </button>
  )
}

export default ToggleButton
