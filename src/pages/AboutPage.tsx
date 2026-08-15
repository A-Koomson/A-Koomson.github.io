import { About } from '../components/About'
import { Education } from '../components/Education'
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
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">About</p>
          <h1 className="page-header__title">Who I am</h1>
          <p className="page-header__description">{profile.tagline}</p>
        </div>
      </div>
      <About />
      <Philosophy />
      <Education />
    </>
  )
}
