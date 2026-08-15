import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { SkillCard } from '../components/SkillCard'
import {
  getEducation,
  getExperience,
  getFeaturedProjects,
  getProfile,
  getSkillCategories,
} from '../services/content'
import { displayText, isPlaceholder } from '../utils/placeholders'

export function HomePage() {
  const profile = getProfile()
  const featured = getFeaturedProjects()
  const skills = getSkillCategories().flatMap((category) => category.skills).slice(0, 8)
  const experience = getExperience()[0]
  const education = getEducation()[0]

  return (
    <>
      <Seo
        title="Alexander Baafi Koomson — Software Engineer & Systems Builder"
        description="Software Engineer and Systems Builder focused on backend engineering, system design, databases, and understanding how reliable software systems work."
      />
      <Hero />
      <section className="home-intro">
        <div className="container">
          <SectionHeading index="01" eyebrow="Introduction" title="Engineer. Student. Builder." />
          <p className="about__text">{profile.about[0]}</p>
          {education ? (
            <p className="about__text">
              Currently pursuing {education.credential} at {education.institution}. {education.note}
            </p>
          ) : null}
          <Link className="section-link" to="/about/">
            Continue to About
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Projects"
            description="A growing set of systems and applications. Each card opens a dedicated case study."
          />
          <div className="projects__featured">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
          <Link className="button button--primary" to="/projects/">
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            index="03"
            eyebrow="Focus"
            title="Technical stack"
            description="Backend, data, and the tools used to build and operate software. AWS is an area of active learning."
          />
          <div className="skills__grid">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          <p>
            <Link className="section-link" to="/skills/">
              See all skills
            </Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading index="04" eyebrow="Work" title="Experience" />
          {experience ? (
            <div className="timeline__card">
              <p className="timeline__meta">{displayText(experience.dates, 'Dates to be added')}</p>
              <h3>{experience.company}</h3>
              <p className="timeline__role">{displayText(experience.role, 'Role details coming soon')}</p>
              {experience.responsibilities.some((item) => !isPlaceholder(item)) ? null : (
                <p className="timeline__placeholder">Responsibilities will be added here.</p>
              )}
            </div>
          ) : null}
          <p>
            <Link className="section-link" to="/experience/">
              Full experience
            </Link>
          </p>
        </div>
      </section>
      <section className="home-cta">
        <div className="container">
          <SectionHeading
            index="05"
            eyebrow="Contact"
            title="Let's connect"
            description="For work, collaboration, or a conversation about systems."
          />
          <Link className="button button--primary" to="/contact/">
            Contact
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
