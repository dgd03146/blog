import { motion } from 'framer-motion'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'

type TProps = {
  isDarkMode: boolean
  handleTheme: () => void
}

const ThemeButton = ({ isDarkMode, handleTheme }: TProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      tw="mx-2"
      onClick={handleTheme}
    >
      {isDarkMode ? <BsToggleOn tw="text-h2" /> : <BsToggleOff tw="text-h2" />}
    </motion.button>
  )
}

export default ThemeButton
