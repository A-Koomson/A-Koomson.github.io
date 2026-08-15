import { useState } from 'react'
import { getProjects } from '../services/content'
import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const projects = getProjects()
  const [selected, setSelected] = useState<Project | null>(null)
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Projects"
          description="A growing set of systems and applications. Details, repositories, and live links will be added as each project is documented."
        />
        <div className="projects__featured">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured onOpen={setSelected} />
          ))}
        </div>
        <div className="projects__grid">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
