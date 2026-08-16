import { Mail } from 'lucide-react'
import { getProfile, getSocialLink } from '../services/content'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './icons'
import { Reveal } from './Reveal'

export function Contact() {
  const profile = getProfile()
  const email = getSocialLink('email')
  const github = getSocialLink('github')
  const linkedin = getSocialLink('linkedin')
  const youtube = getSocialLink('youtube')

  const channels = [
    email
      ? {
          id: 'email',
          href: email.href,
          label: 'Email',
          value: profile.email,
          icon: <Mail size={18} strokeWidth={1.7} />,
          external: false,
        }
      : null,
    linkedin
      ? {
          id: 'linkedin',
          href: linkedin.href,
          label: 'LinkedIn',
          value: 'Alexander Koomson',
          icon: <LinkedinIcon size={18} />,
          external: true,
        }
      : null,
    github
      ? {
          id: 'github',
          href: github.href,
          label: 'GitHub',
          value: 'A-Koomson',
          icon: <GithubIcon size={18} />,
          external: true,
        }
      : null,
    youtube
      ? {
          id: 'youtube',
          href: youtube.href,
          label: 'YouTube',
          value: profile.youtubeBrand.name,
          icon: <YoutubeIcon size={18} />,
          external: true,
        }
      : null,
  ].filter((channel): channel is NonNullable<typeof channel> => channel !== null)

  return (
    <section className="section contact">
      <div className="container contact__layout">
        <Reveal>
          <div className="contact__lead">
            <p className="page-kicker">Next step</p>
            <h2>Have a project, idea, or opportunity?</h2>
            <p>Let&apos;s connect. Email is the most direct path.</p>
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Get in Touch
              <Mail size={16} strokeWidth={1.8} />
            </a>
          </div>
        </Reveal>
        <div className="contact__channels">
          {channels.map((channel, index) => (
            <Reveal key={channel.id} delay={index * 0.06}>
              <a
                className="contact__channel"
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noreferrer noopener' : undefined}
              >
                <span className="contact__channel-icon" aria-hidden="true">
                  {channel.icon}
                </span>
                <span>
                  <span className="contact__channel-label">{channel.label}</span>
                  <span className="contact__channel-value">{channel.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
