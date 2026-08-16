import { motion } from 'framer-motion'
import { fadeUp, labelReveal, stagger, viewportOnce } from '../utils/motion'

interface SectionHeadingProps {
  index: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  titleId?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  titleId,
}: SectionHeadingProps) {
  const lines = splitTitle(title)

  return (
    <motion.header
      className={`section-heading section-heading--${align}${description ? ' section-heading--split' : ''}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.p className="section-heading__index" variants={labelReveal}>
        {index}
      </motion.p>
      {eyebrow ? (
        <motion.p className="section-heading__eyebrow" variants={labelReveal}>
          {eyebrow}
        </motion.p>
      ) : null}
      <h2 id={titleId} className="section-heading__title">
        {lines.map((line) => (
          <motion.span key={line} className="title-line" variants={fadeUp}>
            {line}
          </motion.span>
        ))}
      </h2>
      {description ? (
        <motion.p className="section-heading__description" variants={fadeUp}>
          {description}
        </motion.p>
      ) : null}
    </motion.header>
  )
}

function splitTitle(title: string) {
  if (!title.includes('. ')) return [title]
  return title.split(/(?<=\.)\s+/)
}
