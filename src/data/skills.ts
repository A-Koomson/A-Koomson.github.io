import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    skills: [{ name: 'Python' }, { name: 'JavaScript' }, { name: 'Go / Golang' }],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [{ name: 'Django' }, { name: 'REST APIs' }],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [{ name: 'PostgreSQL' }],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [{ name: 'React' }, { name: 'HTML' }, { name: 'CSS' }],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Docker' }, { name: 'Linux' }],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    skills: [{ name: 'AWS', status: 'learning' }],
  },
]
