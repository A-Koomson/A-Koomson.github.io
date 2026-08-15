import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <span className="theme-toggle__icon" data-active={isDark}>
        <Moon size={16} strokeWidth={1.8} />
      </span>
      <span className="theme-toggle__icon" data-active={!isDark}>
        <Sun size={16} strokeWidth={1.8} />
      </span>
    </button>
  )
}
