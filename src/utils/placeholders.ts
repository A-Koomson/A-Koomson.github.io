export function isPlaceholder(value: string | null | undefined): boolean {
  if (value == null) return true
  const normalized = value.trim().toUpperCase()
  return (
    normalized.length === 0 ||
    normalized === 'PLACEHOLDER' ||
    normalized.startsWith('PLACEHOLDER') ||
    normalized === 'TODO' ||
    normalized.startsWith('TODO')
  )
}

export function displayText(value: string, fallback: string): string {
  return isPlaceholder(value) ? fallback : value
}

export function visibleList(values: string[]): string[] {
  return values.filter((value) => !isPlaceholder(value))
}
