import {
  Atom,
  Box,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Palette,
  Server,
  Terminal,
  Workflow,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubIcon } from './icons'

const icons: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Python: Code2,
  Django: Layers,
  'Go / Golang': Workflow,
  'REST APIs': Server,
  PostgreSQL: Database,
  React: Atom,
  JavaScript: FileCode2,
  HTML: Code2,
  CSS: Palette,
  Docker: Box,
  Git: GitBranch,
  GitHub: GithubIcon,
  Linux: Terminal,
  AWS: Cloud,
}

interface SkillIconProps {
  name: string
  size?: number
}

export function SkillIcon({ name, size = 18 }: SkillIconProps) {
  const Icon = icons[name] ?? Braces
  return <Icon size={size} strokeWidth={1.7} />
}
