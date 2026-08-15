import { ExternalLink } from 'lucide-react'
import { getProfile, getVideos } from '../services/content'
import { VideoCard } from './VideoCard'

export function YouTube() {
  const profile = getProfile()
  const videos = getVideos()
  const { youtubeBrand } = profile

  return (
    <section className="section youtube">
      <div className="container">
        <p className="youtube__intro">{youtubeBrand.description}</p>
        {videos.length > 0 ? (
          <div className="youtube__grid">
            {videos.map((video) => (
              <VideoCard key={`${video.youtubeUrl}-${video.title}`} video={video} />
            ))}
          </div>
        ) : (
          <div className="youtube__empty">
            <p>
              New explorations are on the way. The channel is the living notebook for systems, backend engineering, and
              the ideas behind the software we build.
            </p>
          </div>
        )}
        <a
          className="button button--primary youtube__channel"
          href={youtubeBrand.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit the YouTube Channel
          <ExternalLink size={16} strokeWidth={1.8} />
        </a>
      </div>
    </section>
  )
}
