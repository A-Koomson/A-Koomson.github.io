import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'skilledhq',
    company: 'SkilledHQ',
    role: 'Software Developer',
    dates: 'October 2023 – Present',
    summary:
      'Backend-focused development for business and e-commerce applications in Accra, spanning Django APIs, Go/PostgreSQL payroll modules, and related integrations.',
    chapter: 'Software Engineering',
    responsibilities: [
      'Contributed to Django e-commerce APIs for product data, authentication, and orders, collaborating with frontend developers and stakeholders.',
      'Developed Go/PostgreSQL modules for payroll, invoices, and payments, including organization-scoped permissions.',
      'Worked on database models, migrations, request validation, and API integrations; built backend logic for a salon appointment-booking application.',
      'Wrote backend tests, investigated application issues, and contributed to dashboard endpoints and logging with Grafana Loki and Promtail.',
    ],
  },
  {
    id: 'samuel-lartey-susu',
    company: 'Samuel Lartey Susu Enterprise',
    role: 'Mobile Money Agent',
    dates: 'September 2021 – July 2023',
    summary:
      'Handled daily mobile-money operations in Accra, with accurate cash handling, customer support, and fraud-prevention discipline.',
    chapter: 'Financial services',
    responsibilities: [
      'Managed daily cash transactions, deposits, and withdrawals, maintaining accurate financial records and reconciliation.',
      'Assisted customers with mobile financial services and issue resolution while following security and fraud-prevention procedures.',
      'Built customer relationships through reliable service and support.',
    ],
  },
  {
    id: 'des-cosmetics',
    company: 'Des Cosmetics',
    role: 'Cosmetics Store Manager',
    dates: 'January 2021 – August 2021',
    summary: 'Led day-to-day store operations, inventory, and customer sales support.',
    chapter: 'Business / Management',
    responsibilities: [
      'Supervised daily store operations, staff activities, inventory, and product restocking.',
      'Helped customers select products and provided recommendations and sales support.',
    ],
  },
  {
    id: 'cradle-of-grace',
    company: 'Cradle of Grace Montessori',
    role: 'Vocational Teacher',
    dates: 'September 2019 – December 2020',
    summary: 'Taught Science to primary students with structured lessons and practical classroom activities.',
    chapter: 'Earlier experience',
    responsibilities: [
      'Taught Science to primary school students, prepared lesson plans, and conducted assessments.',
      'Used practical examples and classroom activities to support student understanding.',
    ],
  },
]
