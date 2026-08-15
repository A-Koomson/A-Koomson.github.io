import { getSkillCategories } from '../services/content'
import { SkillCard } from './SkillCard'

export function Skills() {
  const categories = getSkillCategories()

  return (
    <section className="section skills">
      <div className="container">
        <div className="skills__groups">
          {categories.map((category) => (
            <div key={category.id} className="skills__group">
              <h2 className="skills__group-title">{category.title}</h2>
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
