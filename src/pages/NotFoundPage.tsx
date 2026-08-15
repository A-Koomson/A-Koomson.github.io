import { Link } from 'react-router-dom'
import { EngineeringGrid } from '../components/EngineeringGrid'
import { Seo } from '../components/Seo'
import { getProfile } from '../services/content'

export function NotFoundPage() {
  const profile = getProfile()

  return (
    <>
      <Seo
        title="Page not found — Alexander Baafi Koomson"
        description="This page is not part of the current site architecture."
      />
      <div className="not-found">
        <EngineeringGrid />
        <p className="not-found__code">404</p>
        <h1>Looks like this system doesn't exist.</h1>
        <p>
          The path you requested is not part of this architecture. Return home or continue through the project work.
        </p>
        <div className="not-found__actions">
          <Link className="button button--primary" to="/">
            Home
          </Link>
          <Link className="button button--secondary" to="/projects/">
            Projects
          </Link>
        </div>
        <p className="not-found__brand">{profile.youtubeBrand.name}</p>
      </div>
    </>
  )
}
