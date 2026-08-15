import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { getNavItems, getProfile, getSocialLink, getSocialLinks } from '../services/content'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './icons'
import { SocialLinks } from './SocialLinks'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const profile = getProfile()
  const navItems = getNavItems()
  const github = getSocialLink('github')
  const linkedin = getSocialLink('linkedin')
  const youtube = getSocialLink('youtube')
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useLockBodyScroll(open)
  useFocusTrap(menuRef, open)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function isActivePath(href: string) {
    if (href === '/') return location.pathname === '/'
    const normalized = href.replace(/\/$/, '')
    return (
      location.pathname === href ||
      location.pathname === normalized ||
      location.pathname.startsWith(`${normalized}/`)
    )
  }

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner">
        <NavLink className="navbar__brand" to="/" aria-label={`${profile.shortName} home`}>
          <span className="navbar__mark">{profile.initials}</span>
          <span className="navbar__name">Koomson</span>
        </NavLink>

        <nav className="navbar__desktop" aria-label="Primary">
          <LayoutGroup>
            <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={isActivePath(item.href) ? 'is-active' : undefined}
                  aria-current={isActivePath(item.href) ? 'page' : undefined}
                >
                  {item.label}
                  {isActivePath(item.href) ? (
                    <motion.span
                      className="navbar__indicator"
                      layoutId="nav-indicator"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                </NavLink>
              </li>
            ))}
            </ul>
          </LayoutGroup>
        </nav>

        <div className="navbar__actions">
          {github ? (
            <a
              className="navbar__icon"
              href={github.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <GithubIcon size={18} strokeWidth={1.7} />
            </a>
          ) : null}
          {linkedin ? (
            <a
              className="navbar__icon"
              href={linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} strokeWidth={1.7} />
            </a>
          ) : null}
          {youtube ? (
            <a
              className="navbar__icon"
              href={youtube.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube"
            >
              <YoutubeIcon size={18} strokeWidth={1.7} />
            </a>
          ) : null}
          <ThemeToggle />
          <button
            type="button"
            className="navbar__menu-button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            ref={menuRef}
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="mobile-menu__panel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      className={isActivePath(item.href) ? 'is-active' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      <span>0{index + 1}</span>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mobile-menu__social">
                <SocialLinks links={getSocialLinks()} />
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
