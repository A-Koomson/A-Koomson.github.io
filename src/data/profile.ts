import type { NavItem, Profile } from '../types'

export const profile: Profile = {
  fullName: 'Alexander Baafi Koomson',
  shortName: 'Alexander Koomson',
  initials: 'AK',
  title: 'Software Engineer & Systems Builder',
  tagline: 'Building reliable systems. Understanding how they work.',
  supportingStatement:
    'I build backend applications with Python, Django, Go, and PostgreSQL, and turn practical problems into software I can explain and improve.',
  about: [
    'I am a software engineer based in Accra, Ghana, focused on backend development. My work includes contributions to business and e-commerce applications, alongside personal and academic projects.',
    'I study Computer Science at Accra Technical University and share software concepts through Systems by Koomson. I am deepening my Python and PostgreSQL skills, learning AWS, and gradually exploring AI engineering through practical projects.',
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
