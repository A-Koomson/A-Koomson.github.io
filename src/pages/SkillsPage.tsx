import { CurrentlyLearning } from '../components/CurrentlyLearning'
import { Seo } from '../components/Seo'
import { Skills } from '../components/Skills'

export function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills — Alexander Baafi Koomson"
        description="Technical skills of Alexander Baafi Koomson across programming, backend engineering, databases, frontend, tools, and infrastructure."
      />
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Capabilities</p>
          <h1 className="page-header__title">Skills</h1>
          <p className="page-header__description">
            A working stack across backend, frontend, and the systems that connect them. AWS is an area of active
            learning, not claimed expertise.
          </p>
        </div>
      </div>
      <Skills />
      <CurrentlyLearning />
    </>
  )
}
