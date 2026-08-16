import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Backend applications and APIs with clear business logic, authentication, and database integration.',
    technologies: ['Python', 'Django', 'Go', 'REST APIs'],
    icon: 'backend',
  },
  {
    id: 'web',
    title: 'Web Application Development',
    description: 'Modern web interfaces and application layers that connect people to working software.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Django'],
    icon: 'web',
  },
  {
    id: 'api',
    title: 'API Development & Integration',
    description: 'Designing and connecting APIs between applications and external services, including payment flows.',
    technologies: ['REST APIs', 'Django', 'Python'],
    icon: 'api',
  },
  {
    id: 'database',
    title: 'Database Design & Development',
    description: 'Relational modeling, queries, and database-backed applications with PostgreSQL.',
    technologies: ['PostgreSQL', 'Data modeling'],
    icon: 'database',
  },
  {
    id: 'architecture',
    title: 'System Design & Architecture',
    description: 'Thinking through components, boundaries, and trade-offs so software stays maintainable as it grows.',
    technologies: ['Architecture', 'Reliability', 'Scalability'],
    icon: 'architecture',
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description: 'Shipping and operating software with Docker, Linux, and GitHub. AWS is an area of active learning.',
    technologies: ['Docker', 'Linux', 'GitHub', 'AWS'],
    icon: 'cloud',
  },
  {
    id: 'custom',
    title: 'Custom Software Solutions',
    description: 'Practical systems for specific needs — payroll, booking, voting, commerce, and student performance tools.',
    technologies: ['Django', 'PostgreSQL', 'React Native'],
    icon: 'custom',
  },
]
