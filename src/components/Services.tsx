import { motion } from 'framer-motion'
import { Boxes, Cable, Cloud, Database, Globe, Network, Server } from 'lucide-react'
import type { ComponentType } from 'react'
import { getServices } from '../services/content'
import type { Service } from '../types'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

const icons: Record<Service['icon'], ComponentType<{ size?: number; strokeWidth?: number }>> = {
  backend: Server,
  web: Globe,
  api: Cable,
  database: Database,
  architecture: Network,
  cloud: Cloud,
  custom: Boxes,
}

export function Services() {
  const items = getServices()

  return (
    <motion.div
      className="services__grid"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {items.map((service, index) => {
        const Icon = icons[service.icon]
        return (
          <motion.article key={service.id} className="service-card" variants={fadeUp}>
            <div className="service-card__top">
              <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="service-card__icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.7} />
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-card__tech">
              {service.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
