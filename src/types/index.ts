export type SocialPlatform = 'github' | 'linkedin' | 'youtube' | 'email'

export interface SocialLink {
  id: SocialPlatform
  label: string
  href: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface YoutubeBrand {
  name: string
  tagline: string
  description: string
  url: string
}

export interface Philosophy {
  statement: string
  explanation: string
  principles: string[]
}

export interface Profile {
  fullName: string
  shortName: string
  initials: string
  title: string
  tagline: string
  supportingStatement: string
  about: string[]
  location: string
  email: string
  cvPath: string
  siteUrl: string
  youtubeBrand: YoutubeBrand
  philosophy: Philosophy
}

export interface ProjectDetails {
  problem: string
  solution: string
  whatIBuilt: string
  keyLearning: string
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  githubUrl: string | null
  liveUrl: string | null
  image: string | null
  featured?: boolean
  details: ProjectDetails
}

export interface Skill {
  name: string
  status?: 'learning' | 'using'
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export interface Experience {
  id: string
  company: string
  role: string
  dates: string
  summary?: string
  chapter?: string
  responsibilities: string[]
}

export interface IdentityFact {
  label: string
  value: string
}

export interface Education {
  id: string
  institution: string
  credential: string
  note: string
}

export interface Video {
  title: string
  youtubeUrl: string
  description: string
  publishedDate: string
}

export interface LearningItem {
  name: string
  note: string
}

export interface Service {
  id: string
  title: string
  description: string
  technologies: string[]
  icon: 'backend' | 'web' | 'api' | 'database' | 'architecture' | 'cloud' | 'custom'
}
