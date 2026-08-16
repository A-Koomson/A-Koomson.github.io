import { motion } from 'framer-motion'
import { getProfile } from '../services/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

export function About() {
  const profile = getProfile()

  return (
    <section className="section about">
      <div className="container about__grid">
        <SectionHeading index="01" eyebrow="Introduction" title="Engineer. Student. Builder." />
        <motion.div
          className="about__content"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {profile.about.map((paragraph) => (
            <motion.p key={paragraph} className="about__text" variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
