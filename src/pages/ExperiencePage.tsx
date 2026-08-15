import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { PageHeader } from '../components/PageHeader'
import { Seo } from '../components/Seo'

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience — Alexander Baafi Koomson"
        description="Professional experience and education for Alexander Baafi Koomson, Software Engineer and Systems Builder."
      />
      <PageHeader
        eyebrow="Career"
        title="Experience"
        description="Roles and responsibilities are listed only where they have been confirmed."
      />
      <Experience />
      <Education />
    </>
  )
}
