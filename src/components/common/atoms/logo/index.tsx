import { motion } from 'framer-motion'
import Link from 'next/link'
import {} from 'twin.macro'
import LogoColor from '@/constants/motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <MotionLink
      href="/"
      tw="font-bold text-h2 hidden laptop:flex font-indie"
      whileHover={LogoColor}
    >
      JungLog
    </MotionLink>
  )
}

export default Logo
