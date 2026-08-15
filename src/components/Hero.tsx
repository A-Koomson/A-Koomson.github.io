import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCvAvailable } from '../hooks/useCvAvailable'
import { getProfile, getSocialLinks } from '../services/content'
import { fadeUp, stagger } from '../utils/motion'
import { EngineeringGrid } from './EngineeringGrid'
import { ProfileImage } from './ProfileImage'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  const profile = getProfile()
  const social = getSocialLinks()
  const cvHref = `${import.meta.env.BASE_URL}${profile.cvPath.replace(/^\//, '')}`
  const cvAvailable = useCvAvailable(cvHref)

  return (
    <section className="hero">
      <EngineeringGrid />
      <div className="hero__inner">
        <motion.div className="hero__copy" variants={stagger} initial="hidden" animate="visible">
          <motion.p className="hero__kicker page-kicker" variants={fadeUp}>
            {profile.title}
          </motion.p>
          <motion.h1 className="hero__name" variants={fadeUp}>
            {profile.fullName}
          </motion.h1>
          <motion.p className="hero__tagline" variants={fadeUp}>
            {profile.tagline}
          </motion.p>
          <motion.p className="hero__support" variants={fadeUp}>
            {profile.supportingStatement}
          </motion.p>
          <motion.div className="hero__actions" variants={fadeUp}>
            <Link className="button button--primary" to="/projects/">
              View My Work
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
            <Link className="button button--secondary" to="/about/">
              About Me
            </Link>
            {cvAvailable ? (
              <a className="button button--ghost" href={cvHref} download>
                Download CV
                <Download size={15} strokeWidth={1.8} />
              </a>
            ) : (
              <button
                type="button"
                className="button button--ghost"
                disabled
                title="CV will be available soon"
                aria-label="Download CV, coming soon"
              >
                Download CV
                <Download size={15} strokeWidth={1.8} />
              </button>
            )}
          </motion.div>
          <motion.div variants={fadeUp}>
            <SocialLinks links={social} />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileImage />
        </motion.div>
      </div>
    </section>
  )
}
