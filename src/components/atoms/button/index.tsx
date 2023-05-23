import { ReactNode } from 'react'

type TProps = {
  cssStyle?: string
  text?: string
  onClick?: () => void
  children?: ReactNode
}

const Button = ({ cssStyle, text, onClick, children }: TProps) => {
  return (
    <button className={`${cssStyle}`} onClick={onClick}>
      {text}
      {children}
    </button>
  )
}

export default Button

// css={[cssStyle && tw`${cssStyle}`]}
