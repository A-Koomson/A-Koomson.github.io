import { getProfile, getSocialLinks } from '../services/content'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const profile = getProfile()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{profile.youtubeBrand.name}</p>
          <p className="footer__copy">
            © {year} {profile.shortName}. Built with care.
          </p>
        </div>
        <SocialLinks links={getSocialLinks()} />
      </div>
    </footer>
  )
}
