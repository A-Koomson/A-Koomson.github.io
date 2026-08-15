import { motion } from 'framer-motion'
import { getExperience } from '../services/content'
import { displayText, isPlaceholder } from '../utils/placeholders'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export function Experience() {
  const entries = getExperience()

  return (
    <section className="section experience">
      <div className="container">
        <div className="timeline-wrap">
          <motion.span
            className="timeline__line"
            aria-hidden="true"
            style={{ originY: 0 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.ol
            className="timeline"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
          {entries.map((entry) => {
            const responsibilities = entry.responsibilities.filter((item) => !isPlaceholder(item))
            return (
              <motion.li key={entry.id} className="timeline__item" variants={fadeUp}>
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__card">
                  <p className="timeline__meta">{displayText(entry.dates, 'Dates to be added')}</p>
                  <h2>{entry.company}</h2>
                  <p className="timeline__role">{displayText(entry.role, 'Role details coming soon')}</p>
                  {responsibilities.length > 0 ? (
                    <ul>
                      {responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="timeline__placeholder">Responsibilities will be added here.</p>
                  )}
                </div>
              </motion.li>
            )
          })}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
