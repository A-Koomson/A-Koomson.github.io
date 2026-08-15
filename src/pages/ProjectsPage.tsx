import { ProjectCard, projectCardTone } from '../components/ProjectCard'
import { Seo } from '../components/Seo'
import { getProjects } from '../services/content'

export function ProjectsPage() {
  const projects = getProjects()
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <>
      <Seo
        title="Projects — Alexander Baafi Koomson"
        description="Selected software projects by Alexander Baafi Koomson, spanning backend systems, mobile applications, and practical engineering work."
      />
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Work</p>
          <h1 className="page-header__title">Projects</h1>
          <p className="page-header__description">
            Each project opens as a case study. Details, repositories, and live links are added as they are documented.
          </p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {featured.length > 0 ? (
            <div className="projects__featured">
              {featured.map((project, index) => (
                <ProjectCard key={project.id} project={project} featured tone={projectCardTone(index)} />
              ))}
            </div>
          ) : null}
          <div className="projects__grid">
            {rest.map((project, index) => (
              <ProjectCard key={project.id} project={project} tone={projectCardTone(index + featured.length)} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
