import { motion } from 'framer-motion'
import { getEducation, getProfile } from '../services/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

export function About() {
  const profile = getProfile()
  const education = getEducation()[0]

  return (
    <section className="section about">
      <div className="container about__grid">
        <SectionHeading index="01" eyebrow="About" title="Engineer. Student. Builder." />
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
          <motion.dl className="about__facts" variants={fadeUp}>
            <div>
              <dt>Focus</dt>
              <dd>Backend systems, architecture, databases</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>{profile.location}</dd>
            </div>
            {education ? (
              <div>
                <dt>Study</dt>
                <dd>
                  {education.credential}, {education.institution}
                </dd>
              </div>
            ) : null}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  )
}
