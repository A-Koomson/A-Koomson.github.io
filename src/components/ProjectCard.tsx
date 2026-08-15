import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { duration, easeOut } from '../utils/motion'
import { displayText, visibleList } from '../utils/placeholders'

export type ProjectCardTone = 'light' | 'olive' | 'dark'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  tone?: ProjectCardTone
}

export function projectCardTone(index: number): ProjectCardTone {
  return (['light', 'olive', 'dark'] as const)[index % 3]
}

export function ProjectCard({ project, featured = false, tone = 'light' }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const technologies = visibleList(project.technologies)
  const description = displayText(project.description, 'Open the case study for available details.')

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: duration.slow, ease: easeOut }}
    >
      <Link
        to={`/projects/${project.id}/`}
        className={`project-card project-card--${tone} ${featured ? 'project-card--featured' : ''}`}
        aria-label={`View ${project.name} case study`}
      >
        <span className="project-card__media">
          {project.image && !imageFailed ? (
            <img
              src={project.image}
              alt=""
              width={featured ? 960 : 640}
              height={featured ? 540 : 400}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="project-card__fallback">{project.name}</span>
          )}
        </span>
        <span className="project-card__body">
          <span className="project-card__top">
            <h3>{project.name}</h3>
          </span>
          <p>{description}</p>
          {technologies.length > 0 ? (
            <ul className="tech-list">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          ) : (
            <p className="project-card__meta">Stack to be documented.</p>
          )}
          <p className="project-card__hint">
            View case study
            <ArrowRight className="project-card__arrow" size={14} strokeWidth={1.8} />
          </p>
        </span>
      </Link>
    </motion.div>
  )
}
