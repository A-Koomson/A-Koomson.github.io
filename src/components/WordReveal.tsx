import { motion } from 'framer-motion'
import { staggerFast, wordReveal } from '../utils/motion'

interface WordRevealProps {
  text: string
  className?: string
  id?: string
  delay?: number
  accentLast?: boolean
}

export function WordReveal({ text, className, id, delay = 0.18, accentLast = false }: WordRevealProps) {
  const words = text.split(' ')

  return (
    <motion.h1
      id={id}
      className={className}
      variants={staggerFast}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay, staggerChildren: 0.06 }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`word-reveal__item${accentLast && index === words.length - 1 ? ' word-reveal__item--accent' : ''}`}
          aria-hidden="true"
        >
          <motion.span className="word-reveal__word" variants={wordReveal}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  )
}
