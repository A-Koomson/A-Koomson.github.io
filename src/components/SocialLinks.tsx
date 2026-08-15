import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import type { SocialLink, SocialPlatform } from '../types'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './icons'

const icons: Record<SocialPlatform, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  email: Mail,
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

export function SocialLinks({ links, className = '' }: SocialLinksProps) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {links.map((link) => {
        const Icon = icons[link.id]
        const isEmail = link.href.startsWith('mailto:')
        return (
          <li key={link.id}>
            <a
              href={link.href}
              className="social-links__item"
              aria-label={link.label}
              {...(!isEmail ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            >
              <Icon size={18} strokeWidth={1.7} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
