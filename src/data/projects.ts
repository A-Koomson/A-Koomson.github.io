import payrollImage from '../assets/projects/logos/pidaso-payroll-lockup.svg'
import atuGoImage from '../assets/projects/images/atu-go.jpg'
import votingImage from '../assets/projects/images/voting.jpg'
import ecommerceImage from '../assets/projects/logos/qraftiq-logo.png'
import salonImage from '../assets/projects/images/salon.jpg'
import ngoImage from '../assets/projects/images/ngo.jpg'
import studentImage from '../assets/projects/images/student.jpg'
import paymentImage from '../assets/projects/images/payment.jpg'
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'payroll-system',
    name: 'Pidaso Payroll (Autopay)',
    description:
      'Contributed to Go and PostgreSQL backend features for payroll and business workflows on Pidaso Autopay at SkilledHQ.',
    technologies: ['Go', 'PostgreSQL', 'REST APIs', 'Docker'],
    githubUrl: null,
    liveUrl: 'https://www.pidaso.com/payroll/auth/signin',
    image: payrollImage,
    featured: true,
    details: {
      problem:
        'Payroll and business applications need consistent employee, pay-schedule, invoice, and payment records across related workflows.',
      solution:
        'The backend exposes APIs backed by PostgreSQL for payroll and business operations, with organization-scoped access and validation around related records.',
      whatIBuilt:
        'As part of the SkilledHQ team, I contributed to payroll-related store logic and tests, bulk invoice and bill endpoints, notification handling, organization preference endpoints, payer onboarding progress, and application logging work.',
      keyLearning:
        'The technical focus was keeping business rules, permissions, and related financial records consistent across API operations.',
    },
  },
  {
    id: 'atu-go',
    name: 'ATU Go',
    description: 'A campus navigation project for Accra Technical University, built with React Native and Expo.',
    technologies: ['React Native', 'Expo'],
    githubUrl: null,
    liveUrl: null,
    image: atuGoImage,
    featured: true,
    details: {
      problem: 'Students and visitors need help finding their way around the university campus.',
      solution:
        'A React Native and Expo client authenticates users, loads campus locations from a backend API, and presents them on a map with search, saved places, and walking-route guidance.',
      whatIBuilt:
        'Built the mobile frontend screens for login, registration, welcome, map, profile, saved locations, and an admin panel, including token restore with secure storage and location-permission handling.',
      keyLearning:
        'The work connects authenticated API access, map presentation, and device location features in a campus navigation client.',
    },
  },
  {
    id: 'voting-system',
    name: 'Voting System',
    description: 'PLACEHOLDER',
    technologies: ['PLACEHOLDER'],
    githubUrl: null,
    liveUrl: null,
    image: votingImage,
    details: {
      problem: 'PLACEHOLDER',
      solution: 'PLACEHOLDER',
      whatIBuilt: 'PLACEHOLDER',
      keyLearning: 'PLACEHOLDER',
    },
  },
  {
    id: 'ecommerce-platform',
    name: 'Qraftiq',
    description:
      'Contributed to the Qraftiq Django e-commerce application across product, vendor, and shop workflows.',
    technologies: ['Python', 'Django'],
    githubUrl: null,
    liveUrl: 'https://qraftiq.com',
    image: ecommerceImage,
    details: {
      problem:
        'An e-commerce application needs connected workflows for creating stores, publishing products, and managing orders.',
      solution:
        'A Django application connects store, product, and order functionality within a shared commerce experience.',
      whatIBuilt:
        'Contributed to product-upload validation feedback, stable shop product ordering, vendor discovery and size-guide upload, product gallery and lightbox fixes, request-to-order mobile UX, and homepage banner performance work.',
      keyLearning:
        'The work involved understanding how seller tools, catalog behavior, and mobile UX changes affect the wider customer journey.',
    },
  },
  {
    id: 'salon-booking',
    name: 'Hair Salon Booking System',
    description:
      'A full-stack hair booking and product demo with a Go API and React client.',
    technologies: ['Go', 'React', 'TypeScript', 'PostgreSQL'],
    githubUrl: null,
    liveUrl: null,
    image: salonImage,
    details: {
      problem:
        'A salon needs a simple way for customers to book appointments and browse related products while staff manage bookings and catalog items.',
      solution:
        'A Go backend with JWT authentication and PostgreSQL supports booking, product, and order workflows, while a React frontend handles customer and admin screens.',
      whatIBuilt:
        'Initialized the full-stack application structure and added backend containerization configuration for local and deployment use.',
      keyLearning:
        'The project explores role-based access across customer booking flows and admin product or booking management.',
    },
  },
  {
    id: 'ngo-website',
    name: 'NGO Website',
    description: 'A WordPress website project for an NGO.',
    technologies: ['WordPress'],
    githubUrl: null,
    liveUrl: null,
    image: ngoImage,
    details: {
      problem: 'PLACEHOLDER',
      solution: 'PLACEHOLDER',
      whatIBuilt: 'PLACEHOLDER',
      keyLearning: 'PLACEHOLDER',
    },
  },
  {
    id: 'student-performance',
    name: 'Student Performance System',
    description:
      'A Flask and React project for student records, CSV import, and academic-risk prediction experiments.',
    technologies: ['Python', 'Flask', 'React', 'scikit-learn', 'PostgreSQL'],
    githubUrl: null,
    liveUrl: null,
    image: studentImage,
    details: {
      problem:
        'Academic teams need a way to manage student records and explore early signals of students who may be academically at risk.',
      solution:
        'A Flask API with PostgreSQL stores student data and prediction history, while a React dashboard supports authentication, student CRUD, CSV upload, and risk analytics views.',
      whatIBuilt:
        'Built and iterated on the system, including database initialization and migrations, CSV upload and prediction endpoint fixes, ML training path adjustments for deployment, and project documentation.',
      keyLearning:
        'The work connects data import, model training paths, and dashboard workflows, with room to improve evaluation rigor before treating predictions as decision-ready.',
    },
  },
  {
    id: 'payment-api',
    name: 'Payment / API Projects',
    description: 'PLACEHOLDER',
    technologies: ['PLACEHOLDER'],
    githubUrl: null,
    liveUrl: null,
    image: paymentImage,
    details: {
      problem: 'PLACEHOLDER',
      solution: 'PLACEHOLDER',
      whatIBuilt: 'PLACEHOLDER',
      keyLearning: 'PLACEHOLDER',
    },
  },
  {
    id: 'referralguard',
    name: 'ReferralGuard',
    description:
      'A maternity referral documentation prototype combining Django, React, and an AI-assisted verification workflow using synthetic data.',
    technologies: ['Python', 'Django REST Framework', 'React', 'TypeScript', 'SQLite'],
    githubUrl: 'https://github.com/A-Koomson/referralGuard',
    liveUrl: null,
    image: null,
    featured: false,
    details: {
      problem:
        'Emergency referral documentation can contain missing or contradictory information, while receiving-facility capabilities and availability can be unclear.',
      solution:
        'A Django REST API and React interface structure referral records, combine deterministic checks with model-assisted extraction, and compare clinician-confirmed needs with synthetic facility capabilities and timestamped availability. Human review gates control the documented handoff.',
      whatIBuilt:
        'Developed the hackathon prototype with AI-assisted tooling, including the referral workflow, role-based access, facility matching, administration screens, evaluation tooling, and setup documentation. Follow-up work corrected CSRF handling after login and saved pending referral information before facility matching.',
      keyLearning:
        'The project explores combining deterministic validation, evidence-linked findings, model assistance, and human review. Its synthetic evaluation demonstrates prototype behavior, not clinical effectiveness or readiness for real patient care.',
    },
  },
  {
    id: 'titanic-data-science',
    name: 'Titanic Data Science Study',
    description:
      'An academic Python project exploring Titanic passenger data through cleaning, visualization, statistical analysis, and logistic regression.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
    githubUrl: 'https://github.com/A-Koomson/titanic-data-science-project',
    liveUrl: null,
    image: null,
    featured: false,
    details: {
      problem:
        'A historical passenger dataset provides a practical setting for investigating missing values, relationships between variables, and a binary classification task.',
      solution:
        'A Jupyter notebook uses Pandas and NumPy for data preparation, Matplotlib and Seaborn for visualization, and scikit-learn logistic regression for survival classification.',
      whatIBuilt:
        'Completed the academic analysis, including missing-value handling, exploratory charts, descriptive statistics, categorical encoding, an 80/20 train-test split, and evaluation using a confusion matrix and classification report.',
      keyLearning:
        'The work connects data preparation and exploratory analysis to baseline model evaluation, with room to improve preprocessing and model convergence.',
    },
  },
  {
    id: 'church-programme-attendance',
    name: 'Church Programme Attendance',
    description:
      'A Flutter registration demo that validates attendee details and displays a summary of the submitted information.',
    technologies: ['Flutter', 'Dart'],
    githubUrl: 'https://github.com/A-Koomson/church-programme-attendance',
    liveUrl: null,
    image: null,
    featured: false,
    details: {
      problem:
        "A simple registration interface should collect an attendee's name, church group, and contact number and clearly show the submitted details.",
      solution: "Flutter's built-in form widgets validate the inputs and navigate to an attendance summary screen.",
      whatIBuilt:
        'Implemented the registration and summary demo and worked on its Flutter web deployment configuration, including a fix for a blank GitHub Pages screen.',
      keyLearning:
        'The project focuses on input validation, navigation between screens, and diagnosing Flutter web rendering issues.',
    },
  },
]
