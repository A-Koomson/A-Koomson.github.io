import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'Go / Golang' },
      { name: 'REST APIs' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps / Cloud',
    skills: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'AWS', status: 'learning' },
      { name: 'Linux' },
    ],
  },
]
