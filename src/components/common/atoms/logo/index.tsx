import { motion } from 'framer-motion'
import Link from 'next/link'
import {} from 'twin.macro'
import LogoColor from '@/constants/motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <MotionLink
      href="/"
      tw="font-bold text-[1.8rem] hidden laptop:flex font-indie"
      whileHover={LogoColor}
    >
      jungLog
      {/* <span tw="text-red">geo</span>
      <span tw="text-blue">jung</span>
      <span tw="text-yellow">im</span> */}
    </MotionLink>
  )
}

export default Logo
