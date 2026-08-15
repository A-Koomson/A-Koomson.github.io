import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { GithubIcon } from '../components/icons'
import { getProjectById } from '../services/content'
import { fadeIn, viewportOnce } from '../utils/motion'
import { isPlaceholder, visibleList } from '../utils/placeholders'

export function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = projectId ? getProjectById(projectId) : undefined

  if (!project) {
    return <Navigate to="/projects/" replace />
  }

  const technologies = visibleList(project.technologies)
  const overview = value(project.description)
  const problem = value(project.details.problem)
  const solution = value(project.details.solution)
  const contribution = value(project.details.whatIBuilt)
  const learning = value(project.details.keyLearning)
  const github = link(project.githubUrl)
  const live = link(project.liveUrl)
  const hasBody = Boolean(overview || problem || solution || contribution || learning)

  return (
    <>
      <Seo
        title={`${project.name} — Alexander Baafi Koomson`}
        description={overview ?? `${project.name} — a software project by Alexander Baafi Koomson.`}
      />
      <article className="case-study">
        <div className="container case-study__hero">
          <Reveal>
            <p className="page-header__eyebrow">Case study</p>
            <h1 className="case-study__title">{project.name}</h1>
            {overview ? <p className="page-header__description">{overview}</p> : null}
          </Reveal>
          {project.image ? (
            <Reveal delay={0.08}>
              <img className="case-study__image" src={project.image} alt={`${project.name} visual`} />
            </Reveal>
          ) : null}
        </div>
        {solution ? (
          <section className="case-architecture">
            <div className="container">
              <Reveal>
                <p className="case-label">Technical architecture</p>
                <h2>The solution</h2>
                <p>{solution}</p>
              </Reveal>
            </div>
          </section>
        ) : null}
        <div className="container case-study__layout">
          <div>
            {hasBody ? (
              <>
                <CaseBlock title="Project overview" body={overview} />
                <CaseBlock title="The problem" body={problem} />
                <CaseBlock title="My contribution" body={contribution} />
                <CaseBlock title="Key learning" body={learning} />
              </>
            ) : (
              <Reveal>
                <p className="case-empty">
                  This case study is being documented. The title, visual, and known technologies are listed here until
                  the remaining sections are added.
                </p>
              </Reveal>
            )}
            <Reveal delay={0.06}>
              <div className="case-study__links">
                {github ? (
                  <a className="button button--secondary" href={github} target="_blank" rel="noreferrer noopener">
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                ) : null}
                {live ? (
                  <a className="button button--primary" href={live} target="_blank" rel="noreferrer noopener">
                    Live demo
                  </a>
                ) : null}
                <Link className="button button--ghost" to="/projects/">
                  <ArrowLeft size={16} />
                  Back to projects
                </Link>
              </div>
            </Reveal>
          </div>
          <motion.aside
            className="case-aside"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2>Project metadata</h2>
            <p>{project.featured ? 'Featured project' : 'Case study'}</p>
            <h2>Technology stack</h2>
            {technologies.length > 0 ? (
              <ul className="tech-list">
                {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            ) : (
              <p>Stack to be documented.</p>
            )}
          </motion.aside>
        </div>
      </article>
    </>
  )
}

function CaseBlock({ title, body }: { title: string; body: string | null }) {
  if (!body) return null
  return (
    <Reveal>
      <section className="case-block">
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
    </Reveal>
  )
}

function value(input: string | null | undefined): string | null {
  return isPlaceholder(input) || input == null ? null : input
}

function link(input: string | null | undefined): string | null {
  return isPlaceholder(input) || input == null ? null : input
}
