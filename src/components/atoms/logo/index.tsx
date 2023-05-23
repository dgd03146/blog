import { motion } from 'framer-motion'
import Link from 'next/link'
import tw from 'twin.macro'
import LogoColor from '@/constants/motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <MotionLink
      href="/"
      tw="font-bold text-h3 hidden laptop:flex"
      whileHover={LogoColor}
    >
      GeoJung
    </MotionLink>
  )
}

export default Logo
