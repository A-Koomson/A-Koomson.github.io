import { Link } from 'react-router-dom'
import { getNavItems, getProfile, getSocialLinks } from '../services/content'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const profile = getProfile()
  const year = new Date().getFullYear()
  const navItems = getNavItems()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{profile.shortName}</p>
          <p className="footer__note">{profile.title}</p>
          <p className="footer__copy">
            © {year} {profile.fullName}. {profile.youtubeBrand.name}.
          </p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.id} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <SocialLinks links={getSocialLinks()} />
      </div>
    </footer>
  )
}
