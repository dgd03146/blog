import Link from 'next/link'
import {} from 'twin.macro'

const Logo = () => {
  return (
    <Link
      href="/"
      tw="font-bold text-[1.5rem] hidden laptop:flex font-indie dark:text-light"
    >
      <span tw="text-red dark:text-yellow">Jung</span>
      <span tw="text-blue dark:text-emerald">Log</span>
    </Link>
  )
}

export default Logo
