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
          <motion.ol
            className="timeline"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {entries.map((entry, index) => {
              const responsibilities = entry.responsibilities.filter((item) => !isPlaceholder(item))
              const number = String(index + 1).padStart(2, '0')
              return (
                <motion.li key={entry.id} className="timeline__item" variants={fadeUp}>
                  <div className="timeline__index-col">
                    <span className="timeline__index">{number}</span>
                    {entry.chapter ? <p className="timeline__chapter">{entry.chapter}</p> : null}
                  </div>
                  <div className="timeline__rail" aria-hidden="true">
                    <span className="timeline__marker" />
                    {index < entries.length - 1 ? <span className="timeline__segment" /> : null}
                  </div>
                  <article className="timeline__card">
                    <p className="timeline__meta">{displayText(entry.dates, 'Dates to be added')}</p>
                    <h2>{entry.company}</h2>
                    <p className="timeline__role">{displayText(entry.role, 'Role details coming soon')}</p>
                    {entry.summary && !isPlaceholder(entry.summary) ? (
                      <p className="timeline__summary">{entry.summary}</p>
                    ) : null}
                    {responsibilities.length > 0 ? (
                      <ul>
                        {responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="timeline__placeholder">Responsibilities will be added here.</p>
                    )}
                  </article>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
