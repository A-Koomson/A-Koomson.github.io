import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUp, fadeUpDelay, viewportOnce } from '../utils/motion'

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number
}

export function Reveal({ children, className, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={delay ? fadeUpDelay(delay) : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
