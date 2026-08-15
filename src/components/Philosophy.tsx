import { motion } from 'framer-motion'
import { getProfile } from '../services/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export function Philosophy() {
  const { philosophy } = getProfile()

  return (
    <section className="philosophy" aria-labelledby="philosophy-heading">
      <motion.div
        className="container philosophy__inner"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p className="philosophy__label" variants={fadeUp}>
          02 / Engineering philosophy
        </motion.p>
        <motion.h2 id="philosophy-heading" className="philosophy__statement" variants={fadeUp}>
          {philosophy.statement}
        </motion.h2>
        <motion.p className="philosophy__copy" variants={fadeUp}>
          {philosophy.explanation}
        </motion.p>
        <motion.ul className="philosophy__principles" variants={stagger}>
          {philosophy.principles.map((principle) => (
            <motion.li key={principle} variants={fadeUp}>
              {principle}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
