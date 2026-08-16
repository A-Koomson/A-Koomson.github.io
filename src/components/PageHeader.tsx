import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, labelReveal, stagger } from '../utils/motion'
import { EngineeringGrid } from './EngineeringGrid'
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
      <span className="page-header__shape page-header__shape--yellow" aria-hidden="true" />
      <span className="page-header__shape page-header__shape--lime" aria-hidden="true" />
      <EngineeringGrid patternId={`page-grid-${eyebrow.toLowerCase()}`} />
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
      <div className="page-header__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            className="hero__wave hero__wave--yellow"
            d="M0 58 C 260 110 520 8 780 46 C 1040 84 1240 16 1440 52 L1440 120 L0 120 Z"
          />
          <path
            className="hero__wave hero__wave--green"
            d="M0 78 C 280 36 540 108 820 70 C 1080 34 1260 94 1440 64 L1440 120 L0 120 Z"
          />
          <path
            className="hero__wave hero__wave--paper"
            d="M0 98 C 320 76 580 116 880 94 C 1140 74 1300 108 1440 90 L1440 120 L0 120 Z"
          />
        </svg>
      </div>
    </motion.div>
  )
}
