import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getNavItems, getProfile, getSocialLinks } from '../services/content'
import { fadeUp, viewportOnce } from '../utils/motion'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const profile = getProfile()
  const year = new Date().getFullYear()
  const navItems = getNavItems()
  const social = getSocialLinks()
  const location = useLocation()

  function isActivePath(href: string) {
    if (href === '/') return location.pathname === '/'
    const normalized = href.replace(/\/$/, '')
    return (
      location.pathname === href ||
      location.pathname === normalized ||
      location.pathname.startsWith(`${normalized}/`)
    )
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="footer__art" aria-hidden="true">
        <svg viewBox="0 0 900 420" preserveAspectRatio="xMaxYMid slice">
          <path
            d="M220 400 L520 40 L820 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M300 400 L520 110 L740 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M380 400 L520 180 L660 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="container footer__inner">
        <div className="footer__brand-col">
          <Link className="footer__logo" to="/">
            <span className="navbar__mark">{profile.initials}</span>
            <span>
              <span className="footer__brand">{profile.shortName}</span>
              <span className="footer__note">{profile.youtubeBrand.name}</span>
            </span>
          </Link>
          <p className="footer__blurb">{profile.tagline}</p>
          <SocialLinks links={social} />
          <button type="button" className="footer__top" onClick={scrollToTop}>
            Back to top
            <ArrowUp size={14} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="footer__map" aria-label="Site map">
          <p className="footer__heading">Site Map</p>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              end={item.href === '/'}
              className={isActivePath(item.href) ? 'is-active' : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="footer__connect-col">
          <p className="footer__heading">Connect</p>
          {social.map((link) => (
            <a
              key={link.id}
              href={link.href}
              {...(link.href.startsWith('mailto:')
                ? {}
                : { target: '_blank', rel: 'noreferrer noopener' })}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bar">
        <p>
          Copyright © {year}, {profile.fullName}. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
