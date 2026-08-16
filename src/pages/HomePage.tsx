import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { IdentityFacts } from '../components/IdentityFacts'
import { ProjectCard, projectCardTone } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { Services } from '../components/Services'
import { SkillCard } from '../components/SkillCard'
import { getEducation, getExperience, getFeaturedProjects, getProfile, getSkillCategories } from '../services/content'
import { displayText, isPlaceholder } from '../utils/placeholders'

export function HomePage() {
  const profile = getProfile()
  const featured = getFeaturedProjects()
  const skills = getSkillCategories().flatMap((category) => category.skills.slice(0, 3))
  const experience = getExperience()
  const education = getEducation()[0]

  return (
    <>
      <Seo
        title="Alexander Baafi Koomson — Software Engineer & Systems Builder"
        description="Software Engineer and Systems Builder focused on backend engineering, system design, databases, and understanding how reliable software systems work."
      />
      <Hero />
      <section className="home-facts">
        <div className="container">
          <IdentityFacts />
        </div>
      </section>
      <section className="home-intro">
        <div className="container about__grid">
          <SectionHeading index="01" eyebrow="Introduction" title="Engineer. Student. Builder." />
          <Reveal>
            <p className="about__text">{profile.about[0]}</p>
            {education ? (
              <p className="about__text">
                Currently pursuing {education.credential} at {education.institution}. {education.note}
              </p>
            ) : null}
            <Link className="section-link" to="/about/">
              Continue to About
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            index="02"
            eyebrow="What I can build"
            title="Services"
            description="Software engineering work I can take on — backend systems, web applications, and the architecture that holds them together."
          />
          <Services />
        </div>
      </section>
      <section className="section section--olive">
        <div className="container">
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title="Projects"
            description="A growing set of systems and applications. Each card opens a dedicated case study."
          />
          <div className="projects__featured">
            {featured.map((project, index) => (
              <ProjectCard key={project.id} project={project} featured tone={projectCardTone(index)} />
            ))}
          </div>
          <Reveal delay={0.08}>
            <Link className="button button--primary" to="/projects/">
              View all projects
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            index="04"
            eyebrow="Focus"
            title="Technical stack"
            description="Backend, data, and the tools used to build and operate software. AWS is an area of active learning."
          />
          <div className="skills__grid skills__grid--preview">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          <Reveal delay={0.06}>
            <p>
              <Link className="section-link" to="/skills/">
                See all skills
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section section--olive">
        <div className="container">
          <SectionHeading
            index="05"
            eyebrow="Work"
            title="Experience"
            description="A path from teaching and management into software engineering and systems building."
          />
          <div className="experience-preview">
            {experience.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 0.06}>
                <article className="timeline__card">
                  <span className="timeline__index">{String(index + 1).padStart(2, '0')}</span>
                  <p className="timeline__meta">{displayText(entry.dates, 'Dates to be added')}</p>
                  <h3>{entry.company}</h3>
                  <p className="timeline__role">{displayText(entry.role, 'Role details coming soon')}</p>
                  {entry.summary && !isPlaceholder(entry.summary) ? (
                    <p className="timeline__summary">{entry.summary}</p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.08}>
            <p>
              <Link className="section-link" to="/experience/">
                Full experience
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
      <section className="home-cta">
        <div className="container home-cta__inner">
          <SectionHeading
            index="06"
            eyebrow="Contact"
            title="Let's build something"
            description="For work, collaboration, or a conversation about systems."
          />
          <Reveal>
            <Link className="button button--primary" to="/contact/">
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
