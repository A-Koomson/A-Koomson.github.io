import { motion } from 'framer-motion'
import { getProfile } from '../services/content'
import { fadeUp, viewportOnce } from '../utils/motion'

export function Philosophy() {
  const { philosophy } = getProfile()

  return (
    <section className="philosophy" aria-labelledby="philosophy-heading">
      <div className="container philosophy__inner">
        <motion.p
          className="philosophy__label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          02 / Engineering philosophy
        </motion.p>
        <motion.h2
          id="philosophy-heading"
          className="philosophy__statement"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {philosophy.statement}
        </motion.h2>
        <motion.p
          className="philosophy__copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {philosophy.explanation}
        </motion.p>
        <ul className="philosophy__principles">
          {philosophy.principles.map((principle) => (
            <motion.li
              key={principle}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {principle}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
