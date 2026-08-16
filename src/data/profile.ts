import type { NavItem, Profile } from '../types'

export const profile: Profile = {
  fullName: 'Alexander Baafi Koomson',
  shortName: 'Alexander Koomson',
  initials: 'AK',
  title: 'Software Engineer & Systems Builder',
  tagline: 'Building reliable systems. Understanding how they work.',
  supportingStatement:
    'I build backend systems, explore how software works beneath the surface, and continuously turn what I learn into practical projects.',
  about: [
    'I am a Software Engineer and Systems Builder. I spend most of my time on backend work — APIs, databases, and the structure that keeps software reliable after the first version ships.',
    'I care about why a system behaves the way it does: how data moves, where it fails, and what makes it hold up. I am studying Computer Science at Accra Technical University, building practical projects as I learn, and sharing that process through Systems by Koomson.',
  ],
  location: 'Accra, Ghana',
  email: 'koomsonalexander54@gmail.com',
  cvPath: 'Alexander-Koomson-CV.pdf',
  siteUrl: 'https://a-koomson.github.io',
  youtubeBrand: {
    name: 'Systems by Koomson',
    tagline: 'Building. Learning. Explaining.',
    description:
      'Exploring software engineering, backend systems, architecture, and the ideas behind the systems we build.',
    url: 'https://www.youtube.com/@SystemsbyKoomson',
  },
  philosophy: {
    statement: "Don't just code it. Understand it.",
    explanation:
      'Writing code is the starting point. The real work is understanding system behavior, architecture, databases, APIs, scalability, reliability, and the trade-offs behind every decision.',
    principles: [
      'System behavior',
      'Architecture',
      'Databases',
      'APIs',
      'Scalability',
      'Reliability',
      'Trade-offs',
    ],
  },
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about/' },
  { id: 'services', label: 'Services', href: '/services/' },
  { id: 'projects', label: 'Projects', href: '/projects/' },
  { id: 'skills', label: 'Skills', href: '/skills/' },
  { id: 'experience', label: 'Experience', href: '/experience/' },
  { id: 'youtube', label: 'YouTube', href: '/youtube/' },
  { id: 'contact', label: 'Contact', href: '/contact/' },
]
