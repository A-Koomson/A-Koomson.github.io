import { About } from '../components/About'
import { Education } from '../components/Education'
import { PageHeader } from '../components/PageHeader'
import { Philosophy } from '../components/Philosophy'
import { Seo } from '../components/Seo'
import { getProfile } from '../services/content'

export function AboutPage() {
  const profile = getProfile()

  return (
    <>
      <Seo
        title="About Alexander Baafi Koomson — Software Engineer"
        description="About Alexander Baafi Koomson, a Software Engineer and Systems Builder focused on backend engineering, architecture, and how reliable software systems work."
      />
      <PageHeader eyebrow="About" title="Who I am" description={profile.tagline} />
      <About />
      <Philosophy />
      <Education />
    </>
  )
}
