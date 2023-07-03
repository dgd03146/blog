import { motion } from 'framer-motion'
import Link from 'next/link'
import {} from 'twin.macro'
import LogoColor from '@/constants/motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <MotionLink
      href="/"
      tw="font-bold text-[1.8rem] hidden laptop:flex font-indie dark:text-light"
      whileHover={LogoColor}
    >
      {/* FIXME: Motion 고려해볼것 */}
      <span tw="text-red dark:text-yellow">Jung</span>
      <span tw="text-blue dark:text-emerald">Log</span>
      {/* <span tw="text-yellow">Log</span> */}
    </MotionLink>
  )
}

export default Logo
