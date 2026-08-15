import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../types'
import { displayText, isPlaceholder, visibleList } from '../utils/placeholders'
import { GithubIcon } from './icons'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
  featured?: boolean
}

export function ProjectCard({ project, onOpen, featured = false }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const technologies = visibleList(project.technologies)
  const description = displayText(project.description, 'Details coming soon.')

  return (
    <motion.article
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        className="project-card__media"
        onClick={() => onOpen(project)}
        aria-label={`Open details for ${project.name}`}
      >
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
      </button>
      <div className="project-card__body">
        <div className="project-card__top">
          <h3>
            <button type="button" onClick={() => onOpen(project)}>
              {project.name}
            </button>
          </h3>
          <div className="project-card__links">
            {!isPlaceholder(project.githubUrl) && project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer noopener" aria-label={`${project.name} on GitHub`}>
                <GithubIcon size={17} strokeWidth={1.7} />
              </a>
            ) : null}
            {!isPlaceholder(project.liveUrl) && project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" aria-label={`${project.name} live demo`}>
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </a>
            ) : null}
          </div>
        </div>
        <p>{description}</p>
        {technologies.length > 0 ? (
          <ul className="tech-list">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : (
          <p className="project-card__meta">Technologies to be added.</p>
        )}
      </div>
    </motion.article>
  )
}
