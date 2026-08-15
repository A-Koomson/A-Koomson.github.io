import { motion } from 'framer-motion'
import type { Skill } from '../types'

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
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
