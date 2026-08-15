const VIDEO_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/

export function extractYouTubeId(url: string): string | null {
  if (!url || isPlaceholderUrl(url)) return null

  try {
    const trimmed = url.trim()
    const patterns = [
      /(?:youtube\.com\/watch\?(?:[^#]*&)?v=)([a-zA-Z0-9_-]{11})/,
      /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/video\/)([a-zA-Z0-9_-]{11})/,
    ]

    for (const pattern of patterns) {
      const match = trimmed.match(pattern)
      if (match?.[1] && VIDEO_ID_PATTERN.test(match[1])) return match[1]
    }

    const parsed = new URL(trimmed)
    const fromQuery = parsed.searchParams.get('v')
    if (fromQuery && VIDEO_ID_PATTERN.test(fromQuery)) return fromQuery

    return null
  } catch {
    return null
  }
}

export function youtubeThumbnail(id: string, quality: 'maxresdefault' | 'hqdefault' = 'maxresdefault'): string {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`
}

export function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`
}

function isPlaceholderUrl(url: string): boolean {
  const normalized = url.trim().toUpperCase()
  return normalized === 'PLACEHOLDER' || normalized.startsWith('PLACEHOLDER')
}
