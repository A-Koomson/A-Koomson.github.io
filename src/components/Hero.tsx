import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCvAvailable } from '../hooks/useCvAvailable'
import { getProfile, getSocialLinks } from '../services/content'
import { fadeUpDelay } from '../utils/motion'
import { EngineeringGrid } from './EngineeringGrid'
import { ProfileImage } from './ProfileImage'
import { SocialLinks } from './SocialLinks'
import { WordReveal } from './WordReveal'

export function Hero() {
  const profile = getProfile()
  const social = getSocialLinks()
  const cvHref = `${import.meta.env.BASE_URL}${profile.cvPath.replace(/^\//, '')}`
  const cvAvailable = useCvAvailable(cvHref)

  return (
    <section className="hero">
      <EngineeringGrid />
      <div className="hero__inner">
        <div className="hero__copy">
          <WordReveal className="hero__name" text={profile.fullName} delay={0.16} />
          <motion.p className="hero__kicker page-kicker" variants={fadeUpDelay(0.26)} initial="hidden" animate="visible">
            {profile.title}
          </motion.p>
          <motion.p className="hero__tagline" variants={fadeUpDelay(0.34)} initial="hidden" animate="visible">
            {profile.tagline}
          </motion.p>
          <motion.p className="hero__support" variants={fadeUpDelay(0.38)} initial="hidden" animate="visible">
            {profile.supportingStatement}
          </motion.p>
          <motion.div className="hero__actions" variants={fadeUpDelay(0.44)} initial="hidden" animate="visible">
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
          <motion.div variants={fadeUpDelay(0.52)} initial="hidden" animate="visible">
            <SocialLinks links={social} />
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileImage />
        </motion.div>
      </div>
    </section>
  )
}
