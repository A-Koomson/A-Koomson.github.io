import { education } from '../data/education'
import { experience } from '../data/experience'
import { learning } from '../data/learning'
import { navItems, profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import { socialLinks } from '../data/socialLinks'
import { videos } from '../data/videos'

/**
 * Content service.
 * Components should import from here rather than from individual data files.
 * To switch to an API later, replace these functions with fetch calls
 * and keep the return shapes the same.
 */
export function getProfile() {
  return profile
}

export function getNavItems() {
  return navItems
}

export function getProjects() {
  return projects
}

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects() {
  const featured = projects.filter((project) => project.featured)
  return featured.length > 0 ? featured : projects.slice(0, 2)
}

export function getSkillCategories() {
  return skillCategories
}

export function getExperience() {
  return experience
}

export function getEducation() {
  return education
}

export function getVideos() {
  return videos
}

export function getSocialLinks() {
  return socialLinks
}

export function getLearning() {
  return learning
}

export function getSocialLink(id: 'github' | 'linkedin' | 'youtube' | 'email') {
  return socialLinks.find((link) => link.id === id)
}
