import { Mail } from 'lucide-react'
import { getProfile, getSocialLink } from '../services/content'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './icons'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const profile = getProfile()
  const email = getSocialLink('email')
  const github = getSocialLink('github')
  const linkedin = getSocialLink('linkedin')
  const youtube = getSocialLink('youtube')

  return (
    <section id="contact" className="section contact">
      <div className="container contact__layout">
        <SectionHeading
          index="09"
          eyebrow="Contact"
          title="Let's Connect"
          description="For work, collaboration, or a conversation about systems — email is the most direct path."
        />
        <div className="contact__panel">
          <a className="contact__email" href={`mailto:${profile.email}`}>
            <Mail size={20} strokeWidth={1.7} />
            {profile.email}
          </a>
          <div className="contact__channels">
            {email ? (
              <a className="contact__channel" href={email.href}>
                <Mail size={18} />
                Email
              </a>
            ) : null}
            {linkedin ? (
              <a className="contact__channel" href={linkedin.href} target="_blank" rel="noreferrer noopener">
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
            ) : null}
            {github ? (
              <a className="contact__channel" href={github.href} target="_blank" rel="noreferrer noopener">
                <GithubIcon size={18} />
                GitHub
              </a>
            ) : null}
            {youtube ? (
              <a className="contact__channel" href={youtube.href} target="_blank" rel="noreferrer noopener">
                <YoutubeIcon size={18} />
                YouTube
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
