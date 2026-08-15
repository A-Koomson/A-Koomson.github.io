import { getSkillCategories } from '../services/content'
import { SectionHeading } from './SectionHeading'
import { SkillCard } from './SkillCard'

export function Skills() {
  const categories = getSkillCategories()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Capabilities"
          title="Tools I work with"
          description="A working stack across backend, frontend, and the systems that connect them. AWS is an area of active learning, not claimed expertise."
        />
        <div className="skills__groups">
          {categories.map((category) => (
            <div key={category.id} className="skills__group">
              <h3 className="skills__group-title">{category.title}</h3>
              <div className="skills__grid">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
