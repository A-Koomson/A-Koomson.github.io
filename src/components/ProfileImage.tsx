import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, type MouseEvent } from 'react'
import profileImage from '../assets/profile/profile.png'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { getProfile } from '../services/content'

export function ProfileImage() {
  const profile = getProfile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [failed, setFailed] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 120, damping: 18 })
  const springY = useSpring(y, { stiffness: 120, damping: 18 })

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5
    x.set(offsetX * 6)
    y.set(offsetY * 6)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className="profile-image"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
    >
      <span className="profile-image__glow" aria-hidden="true" />
      <span className="profile-image__ring" aria-hidden="true" />
      <span className="profile-image__frame">
        {failed ? (
          <span className="profile-image__fallback" aria-hidden="true">
            {profile.initials}
          </span>
        ) : (
          <img
            src={profileImage}
            alt={`Portrait of ${profile.fullName}`}
            width={420}
            height={420}
            decoding="async"
            fetchPriority="high"
            onError={() => setFailed(true)}
          />
        )}
      </span>
    </motion.div>
  )
}
