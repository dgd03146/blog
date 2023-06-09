import { motion } from 'framer-motion'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import tw from 'twin.macro'

type TProps = {
  isDarkMode: boolean
  handleTheme: () => void
}

const ThemeButton = ({ isDarkMode, handleTheme }: TProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleTheme}
    >
      {isDarkMode ? <BsToggleOn tw="text-h2" /> : <BsToggleOff tw="text-h2" />}
    </motion.button>
  )
}

export default ThemeButton
