import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type Props = { size?: 'small' } & ButtonHTMLAttributes<HTMLButtonElement>

// FIXME: 버튼이 무슨 기능을 하는지 모르겠음..?
const Button = ({ size, children, ...props }: PropsWithChildren<Props>) => {
  return <button {...props}>{children}</button>
}

export default Button
