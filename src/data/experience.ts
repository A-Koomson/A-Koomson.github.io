import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'cradle-of-grace',
    company: 'Cradle of Grace Montessori',
    role: 'Teacher',
    dates: 'PLACEHOLDER',
    summary: 'Teaching experience.',
    chapter: 'Earlier experience',
    responsibilities: ['PLACEHOLDER'],
  },
  {
    id: 'des-cosmetics',
    company: 'Des Cosmetics',
    role: 'Cosmetics Manager',
    dates: 'PLACEHOLDER',
    summary: 'Cosmetics management experience.',
    chapter: 'Business / Management',
    responsibilities: ['PLACEHOLDER'],
  },
  {
    id: 'skilledhq',
    company: 'SkilledHQ',
    role: 'Software Engineer',
    dates: 'PLACEHOLDER',
    summary:
      'Contributing to backend development for business applications, including APIs, payroll-related workflows, and transaction functionality.',
    chapter: 'Software Engineering',
    responsibilities: [
      'Contribute to Go and PostgreSQL payroll store logic, bulk invoice and bill endpoints, notifications, and related tests.',
      'Work on Python/Django business-application features, including transaction functionality and frontend integration.',
      'Implement validation and tests and address issues across related application records.',
    ],
  },
]
