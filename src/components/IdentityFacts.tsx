import { motion } from 'framer-motion'
import { getIdentityFacts } from '../services/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export function IdentityFacts() {
  const facts = getIdentityFacts()

  return (
    <motion.dl
      className="identity-facts"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {facts.map((fact) => (
        <motion.div key={fact.label} className="identity-facts__item" variants={fadeUp}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </motion.div>
      ))}
    </motion.dl>
  )
}
