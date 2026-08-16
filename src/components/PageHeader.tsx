import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, labelReveal, stagger } from '../utils/motion'
import { BandDecor, BandWavesBottom } from './BandDecor'
import { TechnicalFigure, type TechnicalFigureVariant } from './TechnicalFigure'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: ReactNode
  figure?: TechnicalFigureVariant
}

export function PageHeader({ eyebrow, title, description, figure }: PageHeaderProps) {
  return (
    <motion.div className="page-header" variants={stagger} initial="hidden" animate="visible">
      <BandDecor patternId={`page-grid-${eyebrow.toLowerCase()}`} />
      <div className="container page-header__inner">
        <div className="page-header__lead">
          <motion.p className="page-header__eyebrow" variants={labelReveal}>
            {eyebrow}
          </motion.p>
          <motion.h1 className="page-header__title" variants={fadeUp}>
            {title}
          </motion.h1>
          {description ? (
            <motion.p className="page-header__description" variants={fadeUp}>
              {description}
            </motion.p>
          ) : null}
        </div>
        {figure ? (
          <motion.div className="page-header__figure" variants={fadeUp}>
            <div className="page-header__orb">
              <TechnicalFigure variant={figure} />
            </div>
          </motion.div>
        ) : null}
      </div>
      <BandWavesBottom />
    </motion.div>
  )
}
