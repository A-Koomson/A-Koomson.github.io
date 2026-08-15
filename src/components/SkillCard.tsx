import { motion } from 'framer-motion'
import type { Skill } from '../types'
import { easeOut } from '../utils/motion'

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const learning = skill.status === 'learning'

  return (
    <motion.article
      className={`skill-card ${learning ? 'skill-card--learning' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: Math.min(index * 0.04, 0.24), ease: easeOut },
      }}
      whileHover={{ y: -3, transition: { duration: 0.22, ease: easeOut } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="skill-card__mark" aria-hidden="true">
        {skill.name.charAt(0)}
      </span>
      <div className="skill-card__body">
        <h3>{skill.name}</h3>
        {learning ? <p>Currently learning</p> : null}
      </div>
    </motion.article>
  )
}
