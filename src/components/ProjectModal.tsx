import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import type { Project } from '../types'
import { displayText, isPlaceholder, visibleList } from '../utils/placeholders'
import { GithubIcon } from './icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  useLockBodyScroll(Boolean(project))
  useFocusTrap(ref, Boolean(project))

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={ref}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal__close" onClick={onClose} aria-label="Close project details">
              <X size={18} strokeWidth={1.8} />
            </button>
            {project.image ? (
              <img
                className="modal__image"
                src={project.image}
                alt=""
                width={960}
                height={540}
              />
            ) : null}
            <div className="modal__body">
              <p className="modal__eyebrow">Project</p>
              <h3 id="project-modal-title">{project.name}</h3>
              <p className="modal__description">
                {displayText(project.description, 'Project details will be added here.')}
              </p>
              <TechList technologies={project.technologies} />
              <dl className="modal__details">
                <Detail label="Problem" value={project.details.problem} />
                <Detail label="Solution" value={project.details.solution} />
                <Detail label="What I built" value={project.details.whatIBuilt} />
                <Detail label="Key learning" value={project.details.keyLearning} />
              </dl>
              <div className="modal__links">
                {!isPlaceholder(project.githubUrl) && project.githubUrl ? (
                  <a className="button button--secondary" href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                ) : null}
                {!isPlaceholder(project.liveUrl) && project.liveUrl ? (
                  <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{displayText(value, 'Coming soon.')}</dd>
    </div>
  )
}

function TechList({ technologies }: { technologies: string[] }) {
  const items = visibleList(technologies)
  if (items.length === 0) return null
  return (
    <ul className="tech-list">
      {items.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  )
}
