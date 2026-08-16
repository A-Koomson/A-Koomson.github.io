import { ExternalLink } from 'lucide-react'
import { getProfile, getVideos } from '../services/content'
import { Reveal } from './Reveal'
import { VideoCard } from './VideoCard'

export function YouTube() {
  const profile = getProfile()
  const videos = getVideos()
  const { youtubeBrand } = profile

  return (
    <section className="section youtube">
      <div className="container">
        <div className="youtube__layout">
          <Reveal>
            <p className="youtube__intro">{youtubeBrand.description}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="youtube__aside">
              <p className="youtube__aside-label">Channel</p>
              <p className="youtube__aside-name">{youtubeBrand.name}</p>
              <p className="youtube__aside-tag">{youtubeBrand.tagline}</p>
              <a
                className="button button--primary"
                href={youtubeBrand.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit YouTube
                <ExternalLink size={16} strokeWidth={1.8} />
              </a>
            </aside>
          </Reveal>
        </div>
        {videos.length > 0 ? (
          <div className="youtube__grid">
            {videos.map((video, index) => (
              <VideoCard key={`${video.youtubeUrl}-${video.title}`} video={video} index={index} />
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="youtube__empty">
              <p className="youtube__empty-label">Studio</p>
              <h2>New explorations are on the way.</h2>
              <p>
                The channel is the living notebook for systems, backend engineering, and the ideas behind the
                software we build.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
