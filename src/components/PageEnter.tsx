import { motion } from 'framer-motion'
import { forwardRef, useState, type ReactNode } from 'react'
import { duration, easeOut } from '../utils/motion'

export const PageEnter = forwardRef<HTMLDivElement, { children: ReactNode }>(function PageEnter(
  { children },
  ref,
) {
  const [settled, setSettled] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: settled ? duration.fast : duration.normal, ease: easeOut }}
      onAnimationComplete={() => setSettled(true)}
    >
      {children}
    </motion.div>
  )
})
