import { motion } from 'framer-motion'
import { getEducation } from '../services/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export function Education() {
  const entries = getEducation()

  return (
    <section className="section education" aria-labelledby="education-heading">
      <div className="container">
        <motion.div
          className="education__header"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p className="section-heading__index" variants={fadeUp}>
            06
          </motion.p>
          <motion.h2 id="education-heading" variants={fadeUp}>
            Education
          </motion.h2>
        </motion.div>
        <div className="education__list">
          {entries.map((entry) => (
            <motion.article
              key={entry.id}
              className="education__card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h3>{entry.institution}</h3>
              <p>{entry.credential}</p>
              <p className="education__note">{entry.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
