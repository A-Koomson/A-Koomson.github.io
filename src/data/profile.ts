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
    'Alexander Baafi Koomson is a Software Engineer and Systems Builder focused on backend engineering and the architecture behind reliable software. He enjoys understanding not only how to build applications, but why systems behave the way they do — how data moves, where failures happen, and what makes software hold up over time.',
    'He is currently pursuing a BSc in Computer Science at Accra Technical University and expects to complete it next year, God willing. His work sits at the intersection of backend systems, databases, and the discipline of learning how software actually works.',
  ],
  location: 'Accra, Ghana',
  email: 'koomsonalexander54@gmail.com',
  cvPath: 'Alexander-Koomson-CV.pdf',
  siteUrl: 'https://a-koomson.github.io',
  youtubeBrand: {
    name: 'Systems by Koomson',
    tagline: 'Exploring the systems behind the software.',
    description:
      'Systems by Koomson is where I explore software engineering, backend systems, architecture, technology, and the ideas behind the systems we build.',
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
  { id: 'projects', label: 'Projects', href: '/projects/' },
  { id: 'skills', label: 'Skills', href: '/skills/' },
  { id: 'experience', label: 'Experience', href: '/experience/' },
  { id: 'youtube', label: 'YouTube', href: '/youtube/' },
  { id: 'contact', label: 'Contact', href: '/contact/' },
]
