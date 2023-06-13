import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type Props = { size?: 'small' } & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ size, children, ...props }: PropsWithChildren<Props>) => {
  return <button {...props}>{children}</button>
}

export default Button
