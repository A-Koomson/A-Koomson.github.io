import { motion } from 'framer-motion'
import { getEducation } from '../services/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

interface EducationProps {
  index?: string
}

export function Education({ index = '02' }: EducationProps) {
  const entries = getEducation()

  return (
    <section className="section education" aria-labelledby="education-heading">
      <div className="container">
        <SectionHeading index={index} eyebrow="Study" title="Education" titleId="education-heading" />
        <motion.div
          className="education__list"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {entries.map((entry) => (
            <motion.article key={entry.id} className="education__card" variants={fadeUp}>
              <h3>{entry.institution}</h3>
              <p>{entry.credential}</p>
              <p className="education__note">{entry.note}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
