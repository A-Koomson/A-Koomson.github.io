import { CurrentlyLearning } from '../components/CurrentlyLearning'
import { PageHeader } from '../components/PageHeader'
import { Seo } from '../components/Seo'
import { Skills } from '../components/Skills'

export function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills — Alexander Baafi Koomson"
        description="Technical skills of Alexander Baafi Koomson across programming, backend engineering, databases, frontend, tools, and infrastructure."
      />
      <PageHeader
        eyebrow="Capabilities"
        title="Skills"
        description="A working stack across backend, frontend, and the systems that connect them. AWS is an area of active learning, not claimed expertise."
      />
      <Skills />
      <CurrentlyLearning />
    </>
  )
}
