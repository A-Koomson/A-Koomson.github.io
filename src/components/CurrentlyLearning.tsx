import { motion } from 'framer-motion'
import { getLearning } from '../services/content'
import { fadeUp, viewportOnce } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

export function CurrentlyLearning() {
  const items = getLearning()

  return (
    <section className="section learning" aria-labelledby="learning-heading">
      <div className="container">
        <SectionHeading
          index="07"
          eyebrow="Growth"
          title="Currently learning"
          description="These are areas of continued development — not completed expertise."
          titleId="learning-heading"
        />
        <ul className="learning__grid">
          {items.map((item) => (
            <motion.li
              key={item.name}
              className="learning__card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
