import { motion } from 'framer-motion'
import { getEducation } from '../services/content'
import { fadeUp, viewportOnce } from '../utils/motion'

export function Education() {
  const entries = getEducation()

  return (
    <section className="section education" aria-labelledby="education-heading">
      <div className="container">
        <div className="education__header">
          <p className="section-heading__index">06</p>
          <h2 id="education-heading">Education</h2>
        </div>
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
