import { useEffect, useState } from 'react'

export function useCvAvailable(path: string) {
  const [available, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false

    async function check() {
      try {
        const head = await fetch(path, { method: 'HEAD' })
        if (cancelled) return
        if (head.ok || head.status === 404) {
          setAvailable(head.ok)
          return
        }
      } catch {
        // Some hosts reject HEAD; try a range GET next.
      }

      try {
        const response = await fetch(path, {
          method: 'GET',
          headers: { Range: 'bytes=0-0' },
        })
        if (!cancelled) setAvailable(response.ok)
      } catch {
        if (!cancelled) setAvailable(false)
      }
    }

    void check()
    return () => {
      cancelled = true
    }
  }, [path])

  return available
}
