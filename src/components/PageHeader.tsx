import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, labelReveal, stagger } from '../utils/motion'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: ReactNode
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <motion.div className="page-header" variants={stagger} initial="hidden" animate="visible">
      <div className="container page-header__inner">
        <div className="page-header__lead">
          <motion.p className="page-header__eyebrow" variants={labelReveal}>
            {eyebrow}
          </motion.p>
          <motion.h1 className="page-header__title" variants={fadeUp}>
            {title}
          </motion.h1>
        </div>
        {description ? (
          <motion.p className="page-header__description" variants={fadeUp}>
            {description}
          </motion.p>
        ) : null}
      </div>
    </motion.div>
  )
}
