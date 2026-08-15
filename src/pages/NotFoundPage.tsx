import { Link } from 'react-router-dom'
import { EngineeringGrid } from '../components/EngineeringGrid'
import { getProfile } from '../services/content'

export function NotFoundPage() {
  const profile = getProfile()

  return (
    <main className="not-found">
      <EngineeringGrid />
      <p className="not-found__code">404</p>
      <h1>Looks like this system doesn't exist.</h1>
      <p>
        The path you requested is not part of this architecture. Return to the main system and continue from there.
      </p>
      <Link className="button button--primary" to="/">
        Return Home
      </Link>
      <p className="not-found__brand">{profile.youtubeBrand.name}</p>
    </main>
  )
}
