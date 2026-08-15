import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
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
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems])
  const activeId = useActiveSection(sectionIds)
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useLockBodyScroll(open)
  useFocusTrap(menuRef, open)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function closeAndNavigate() {
    setOpen(false)
  }

  return (
    <header className={`navbar ${compact ? 'navbar--compact' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__brand" href="#home" aria-label={`${profile.shortName} home`}>
          <span className="navbar__mark">{profile.initials}</span>
          <span className="navbar__name">Koomson</span>
        </a>

        <nav className="navbar__desktop" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={activeId === item.id ? 'is-active' : undefined}
                  aria-current={activeId === item.id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
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
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 16, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <a href={item.href} onClick={closeAndNavigate}>
                      <span>0{index + 1}</span>
                      {item.label}
                    </a>
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
    </header>
  )
}
