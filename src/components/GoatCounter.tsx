import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { goatCounterEndpoint, goatCounterScriptSrc } from '../data/analytics'

declare global {
  interface Window {
    goatcounter?: {
      count?: (vars?: { path?: string; title?: string; referrer?: string; event?: boolean }) => void
      no_onload?: boolean
    }
  }
}

/**
 * Records a GoatCounter pageview on every React Router navigation.
 * count.js is also loaded from index.html with no_onload; this component
 * is the single place that calls count() for SPA routes.
 */
export function GoatCounter() {
  const location = useLocation()

  useEffect(() => {
    window.goatcounter = { ...(window.goatcounter ?? {}), no_onload: true }

    if (!document.querySelector('script[data-goatcounter]')) {
      const script = document.createElement('script')
      script.async = true
      script.src = goatCounterScriptSrc
      script.dataset.goatcounter = goatCounterEndpoint
      script.dataset.goatcounterSettings = JSON.stringify({ no_onload: true })
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    const path = `${location.pathname}${location.search}` || '/'

    const send = () => {
      if (!window.goatcounter?.count) return false
      window.goatcounter.count({
        path,
        title: document.title,
      })
      return true
    }

    if (send()) return

    const timer = window.setInterval(() => {
      if (send()) window.clearInterval(timer)
    }, 100)

    return () => window.clearInterval(timer)
  }, [location.pathname, location.search])

  return null
}
