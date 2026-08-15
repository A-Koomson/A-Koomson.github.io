import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Seo } from '../components/Seo'

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience — Alexander Baafi Koomson"
        description="Professional experience and education for Alexander Baafi Koomson, Software Engineer and Systems Builder."
      />
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Career</p>
          <h1 className="page-header__title">Experience</h1>
          <p className="page-header__description">
            Roles and responsibilities are listed only where they have been confirmed.
          </p>
        </div>
      </div>
      <Experience />
      <Education />
    </>
  )
}
