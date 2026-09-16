import { ExternalLink, Play } from 'lucide-react'
import { getProfile, getVideos } from '../services/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { VideoCard } from './VideoCard'

const TOPICS = ['Databases', 'System design', 'Backend engineering', 'APIs', 'Architecture']

export function YouTube() {
  const profile = getProfile()
  const videos = getVideos()
  const { youtubeBrand } = profile
  const [featured, ...rest] = videos

  return (
    <>
      <section className="section youtube">
        <div className="container">
          <div className="youtube__layout">
            <Reveal>
              <div className="youtube__lead">
                <p className="page-kicker">Channel</p>
                <h2 className="youtube__lead-title">{youtubeBrand.tagline}</h2>
                <p className="youtube__intro">{youtubeBrand.description}</p>
                <ul className="youtube__topics" aria-label="Topics covered">
                  {TOPICS.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <aside className="youtube__aside">
                <div className="youtube__aside-mark" aria-hidden="true">
                  <Play size={28} fill="currentColor" />
                </div>
                <p className="youtube__aside-label">Watch on YouTube</p>
                <p className="youtube__aside-name">{youtubeBrand.name}</p>
                <p className="youtube__aside-tag">
                  Practical lessons on how software systems work — databases, APIs, and the decisions behind them.
                </p>
                <a
                  className="button button--primary"
                  href={youtubeBrand.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit channel
                  <ExternalLink size={16} strokeWidth={1.8} />
                </a>
              </aside>
            </Reveal>
          </div>

          {videos.length > 0 ? (
            <div className="youtube__library">
              <SectionHeading
                index="01"
                eyebrow="Library"
                title="Latest episodes"
                description="Start with the newest breakdowns, then explore earlier foundations on databases, HTTP, indexing, and caching."
              />
              {featured ? (
                <div className="youtube__featured">
                  <VideoCard video={featured} index={0} featured />
                </div>
              ) : null}
              {rest.length > 0 ? (
                <div className="youtube__grid">
                  {rest.map((video, index) => (
                    <VideoCard key={`${video.youtubeUrl}-${video.title}`} video={video} index={index + 1} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <Reveal delay={0.1}>
              <div className="youtube__empty">
                <div className="youtube__empty-mark" aria-hidden="true">
                  <Play size={26} fill="currentColor" />
                </div>
                <p className="youtube__empty-label">Studio</p>
                <h2>New explorations are on the way.</h2>
                <p>
                  The channel is the living notebook for systems, backend engineering, and the ideas behind the
                  software we build.
                </p>
                <a
                  className="button button--primary"
                  href={youtubeBrand.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open YouTube
                  <ExternalLink size={16} strokeWidth={1.8} />
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="youtube-cta" aria-label="Subscribe">
        <div className="container youtube-cta__inner">
          <Reveal>
            <p className="page-kicker">Stay with the build</p>
            <h2 className="youtube-cta__title">More systems. More clarity.</h2>
            <p className="youtube-cta__copy">
              Follow {youtubeBrand.name} for practical explanations of backend concepts and system design.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              className="button button--primary"
              href={youtubeBrand.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Subscribe on YouTube
              <ExternalLink size={16} strokeWidth={1.8} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
