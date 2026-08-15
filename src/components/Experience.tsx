import { motion } from 'framer-motion'
import { getExperience } from '../services/content'
import { displayText, isPlaceholder } from '../utils/placeholders'
import { fadeUp, viewportOnce } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const entries = getExperience()

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Work"
          title="Experience"
          description="Roles and responsibilities will be updated as details are confirmed."
        />
        <ol className="timeline">
          {entries.map((entry) => {
            const responsibilities = entry.responsibilities.filter((item) => !isPlaceholder(item))
            return (
              <motion.li
                key={entry.id}
                className="timeline__item"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__card">
                  <p className="timeline__meta">{displayText(entry.dates, 'Dates to be added')}</p>
                  <h3>{entry.company}</h3>
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
        </ol>
      </div>
    </section>
  )
}
